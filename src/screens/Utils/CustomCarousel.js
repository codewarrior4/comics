import { StyleSheet, Text, View } from 'react-native'
import React,{  useCallback,useState, useRef} from 'react'
import Carousel from 'react-native-snap-carousel';
import { Pages } from '../styles/Pages';

export default function CustomCarousel({data,title,layout}) {

  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = useCallback(({ item, index }) => (
    <View
      style={{
        backgroundColor: '#FFAFAF',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}
    >
      <Text style={{ fontSize: 30 }}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  ), []);
  return (
    <>
      <View>
        <Text style={Pages.pageTextTop}> {title}</Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Carousel
            layout={layout}
            layoutCardOffset={18}
            ref={ref}
            data={data}
            sliderWidth={300}
            itemWidth={300}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
            useScrollView={false}
          />
        </View>
      </View>
      <View
        style={{
          marginVertical:10,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({})