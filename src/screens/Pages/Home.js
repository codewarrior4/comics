import { StyleSheet, Text, ScrollView,View, Dimensions } from 'react-native'
import React,{ useState, useCallback, useRef, useEffect } from 'react'
import { Pages } from '../styles/Pages'
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import {MARVEL_URL,MPKEY} from '@env'
import CustomCarousel from '../Utils/CustomCarousel';

const exampleItems = [
  {
    title: 'Item 1',
    text: 'Text 1',
  },
  {
    title: 'Item 2',
    text: 'Text 2',
  },
  {
    title: 'Item 3',
    text: 'Text 3',
  },
  {
    title: 'Item 4',
    text: 'Text 4',
  },
  {
    title: 'Item 5',
    text: 'Text 5',
  },
];

export default function Home({navigation}) {

  
  const [character,setCharacter]= useState([]);
  const [comics,setComics]= useState([]);
  const [series,setSeries]= useState([]);
  const [creators,setCreators]= useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);

  axios.get(`${MARVEL_URL}API_KEY=${MPKEY}characters`)



  useEffect(() => {
    console.log(MPKEY)
  }, []);
  return (
    <ScrollView style={Pages.body} showsVerticalScrollIndicator={false} >
      <CustomCarousel data={exampleItems} title={'Comics Today'} layout={'tinder'} />
      <CustomCarousel data={exampleItems} title={'Characters'} layout={'stack'} />
      <CustomCarousel data={exampleItems} title={'Story Creators'} layout={'default'} />
      <CustomCarousel data={exampleItems} title={'Comic Series'} layout={'tinder'} />
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({})