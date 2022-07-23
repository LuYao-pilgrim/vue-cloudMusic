import { request } from './helper'

//main
const getSwiper = () => {
  return request('get', '/banner')
}

const getRecommendSongList = () => {
  return request('get', '/personalized')
}

const getRankingList = () => {
  return request('get', '/toplist/detail')
}

const getAlbumList = () => {
  return request('get', '/album/list?limit=18')
}

const getSongList = (tag) => {
  return request('get', '/top/playlist/highquality?cat='+tag)
}

export default {
  getSwiper,
  getRecommendSongList,
  getRankingList,
  getAlbumList,
  getSongList
}
