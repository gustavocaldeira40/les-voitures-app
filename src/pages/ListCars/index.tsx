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
import { useNavigation } from '@react-navigation/native'

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
  const [scrollY, setScrollY] = useState(new Animated.Value(0))

  /*
   *   HOOKS
   */
  const navigation = useNavigation<any>()

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
        message: 'Error loading data',
        type: 'danger',
      })
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  const renderItem = (item: CarsData, index: number) => {
    return <Card item={item} />
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
            data={data}
            horizontal={false}
            renderItem={({ item, index }) => renderItem(item, index)}
            keyExtractor={(item) => String(item?._id)}
            ListHeaderComponent={
              <HeaderTitle
                title="Carros"
                subTitle="Lista de"
                description="Abaixo você pode acompanhar os carros criados e compra-los também."
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
        {/* </ScrollView> */}
      </Container>
    </>
  )
}

export default ListCars
