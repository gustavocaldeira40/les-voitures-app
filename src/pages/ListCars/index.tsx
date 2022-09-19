import React, { useEffect, useState } from 'react'
import { FlatList, RefreshControl, ScrollView, Animated } from 'react-native'

import { Colors } from '../../styles/colors'
import { Container, MainOverlay } from './style'
import HeaderTitle from '../../components/HeaderTitle'
import { EndPoints } from '../../services/endPoints'
import { CarsData } from '../../models/cars'
import { showMessage } from 'react-native-flash-message'
import LoadingSpinner from '../../components/LoadingSpinner'
import Card from '../../components/Card'
import NoItem from '../../components/NoItem'
import HeaderFloating from '../../components/HeaderFloating'
import { useNavigation, useRoute } from '@react-navigation/native'
import { translate } from '../../services/i18n'

const ListCars: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */

  /*
   *   STATES
   */
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState<CarsData[]>([])

  const [showHeaderFloating, setShowHeaderFloating] = useState(false)

  /*
   *   HOOKS
   */
  const navigation = useNavigation<any>()
  const { params } = useRoute()

  /*
   *   LAYOUT
   */

  /*
   *   FORMIK
   */

  /*
   *   FUNCTIONS
   */
  const getDatas = async () => {
    setLoading(true)
    try {
      const data = await EndPoints.getAllCars()
      if (data) {
        setData(data)
      }
    } catch (error) {
      console.log('ERROR THE LOADING DATA')
      showMessage({
        message: translate('Error loading datas'),
        type: 'danger',
      })
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  const renderItem = (item: CarsData, index: number) => {
    return <Card key={index} item={item} changeRemoveCar={changeRemoveCar} />
  }

  const changeRemoveCar = async (item: CarsData) => {
    setLoading(true)
    try {
      if (item?._id) {
        const data = await EndPoints.removeCar(item?._id)

        if (data) {
          showMessage({
            message: translate('Vehicle deleted successfully!'),
            type: 'success',
            duration: 3000,
          })
          await getDatas()
        }
      }
    } catch (error) {
      console.log('ERROR THE DELETE', error)
      showMessage({
        message: translate('Error when deleting vehicle'),
        type: 'danger',
      })
    } finally {
      setLoading(false)
    }
  }

  const reloadItems = () => {
    setRefreshing(true)

    getDatas()
  }

  /*
   *   EFFECTS
   */
  useEffect(() => {
    getDatas()

    return () => {
      getDatas()
    }
  }, [])

  useEffect(() => {
    if (params !== undefined) {
      getDatas()
    }
  }, [params])

  return (
    <>
      <LoadingSpinner show={loading} />

      <Container>
        <MainOverlay
          colors={[Colors.secondary, Colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.4 }}
        />

        {showHeaderFloating && (
          <HeaderFloating
            onPress={() => navigation.goBack()}
            headerShown={showHeaderFloating}
          />
        )}

        {/* <ScrollView> */}

        {data?.length > 0 ? (
          <FlatList
            contentContainerStyle={{ paddingBottom: 50 }}
            data={data}
            horizontal={false}
            renderItem={({ item, index }) => renderItem(item, index)}
            keyExtractor={(item) => String(item?._id)}
            ListHeaderComponent={
              <HeaderTitle
                title={translate('Cars')}
                subTitle={translate('List of')}
                description={translate(
                  'Below you can follow the created cars, edit and delete them',
                )}
                hasHeader={false}
                style={{ marginBottom: 20 }}
              />
            }
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => reloadItems()}
              />
            }
            onScroll={(event) => {
              const scrolling = event.nativeEvent.contentOffset.y

              if (scrolling > 10) {
                setShowHeaderFloating(true)
              } else {
                setShowHeaderFloating(false)
              }
            }}
          />
        ) : (
          <NoItem />
        )}
      </Container>
    </>
  )
}

export default ListCars
