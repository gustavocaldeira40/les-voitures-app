import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { EndPoints } from '../../services/endPoints'
import { SeeMoreData } from '../../types/see-more'
import Header from '../../components/Header'
import { Colors } from '../../styles/colors'
import {
  Container,
  ContainerArea,
  ContainerDescription,
  ContainerLinear,
  ContainerLoading,
  ImageCar,
  MainOverlay,
  OverlaySquare,
} from './style'
import { CarsData } from '../../models/cars'
import { showMessage } from 'react-native-flash-message'

import CarExample from '../../assets/images/car-example.png'
import ActionSeeMore from '../../components/ActionSeeMore'
import LoadingSpinner from '../../components/LoadingSpinner'
import Loading from '../../components/Loading'

type DescriptionData = {
  title: string
  description: string | number
}

const SeeMore: React.FC = () => {
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
  const [item, setItem] = useState<CarsData>(null as any)
  const [description, setDescription] = useState<DescriptionData[]>([])

  /*
   *   HOOKS
   */
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
  const getCar = async () => {
    setLoading(true)
    const id = (params as SeeMoreData)?.id
    try {
      const data = await EndPoints.getOneCar(id)

      if (data) {
        setItem(data)

        setDescription([
          { title: 'Brand', description: data.title },
          { title: 'Price', description: data.price },
          { title: 'Age', description: data.age },
        ])
      }
    } catch (error) {
      console.log('ERROR THE LOADING DATA')
      showMessage({
        message: 'Error the loading data',
        type: 'danger',
      })
    } finally {
      setLoading(false)
    }
  }

  /*
   *   EFFECTS
   */
  useEffect(() => {
    if (params !== undefined) {
      getCar()
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

        <Header title={item?.title} withRightSide />

        <ContainerArea>
          <ImageCar source={CarExample} />
        </ContainerArea>

        <ContainerLinear style={{ elevation: 5 }}>
          <OverlaySquare
            colors={[Colors.tertiary, Colors.primary]}
            start={{ x: 0.6, y: 0 }}
            end={{ x: 0.2, y: 0.9 }}
          />
          <ContainerDescription>
            {description?.length > 0 &&
              description?.map((data, index) => {
                return (
                  <ActionSeeMore
                    key={index}
                    title={data.title}
                    description={data.description}
                  />
                )
              })}
          </ContainerDescription>
        </ContainerLinear>
      </Container>
    </>
  )
}

export default SeeMore
