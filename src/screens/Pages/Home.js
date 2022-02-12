import { StyleSheet, Text, ScrollView,View } from 'react-native'
import React,{useState} from 'react'
import { Pages } from '../styles/Pages'
import Carousel from 'react-native-snap-carousel';

const [index,activeIndex]= useState(0)
const carouselItems= [{
  title:"Item 1",
  text: "Text 1",
},
{
  title:"Item 2",
  text: "Text 2",
},
{
  title:"Item 3",
  text: "Text 3",
},
{
  title:"Item 4",
  text: "Text 4",
},
{
  title:"Item 5",
  text: "Text 5",
}]
const _renderItem =({item,index})=>{
  return (
    <View style={{
        backgroundColor:'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25, }}>
      <Text style={{fontSize: 30}}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>

  )
}
export default function Home() {
  return (
    <ScrollView style={Pages.body} showsVerticalScrollIndicator={false} >
      <View>
          <Text style={Pages.pageTextTop}> Comics Today</Text>
          <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={_renderItem}
                  onSnapToItem = { index => setState({activeIndex:index}) } />
            </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})