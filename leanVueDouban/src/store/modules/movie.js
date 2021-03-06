import Vue from 'vue'

const state={
	hotMovies: [],
  newMovies: [],
  topMovies: [],
  movieTags: [
    {
      title: '同时入选IMDB250和豆瓣电影250的电影',
      href: 'https://m.douban.com/doulist/968362/',
      color: '#FFAC2D'
    },
    {
      title: '带你进入不正常的世界',
      href: 'https://m.douban.com/doulist/16002',
      color: '#FF4055'
    },
    {
      title: '用电【影】来祭奠逝去的岁月',
      href: 'https://m.douban.com/doulist/190343',
      color: '#4F9DED'
    },
    {
      title: '女孩们的故事【电影】',
      href: 'https://m.douban.com/doulist/1125971',
      color: '#FFC46C'
    },
    {
      line: true
    },
    {
      title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
      href: 'https://m.douban.com/doulist/4253902',
      color: '#2384E8'
    },
    {
      title: '美国生活面面观',
      href: 'https://m.douban.com/doulist/121326',
      color: '#3BA94D'
    },
    {
      title: '2015终极期待',
      href: 'https://m.douban.com/doulist/37479562',
      color: '#42BD56'
    },
    {
      title: '经典韩国电影——收集100部',
      href: 'https://m.douban.com/doulist/458087',
      color: '#CC3344'
    }
  ]
}

const mutations = {
	getMovie(state,payload){
		switch (payload.tag){
			case 'hotMovies':
				state.hotMovies = payload.res
			case 'newMovies':
				state.newMovies = payload.res
			case 'topMovies':
				state.topMovies = payload.res
			default:
				state.hotMovies = payload.res
		}
		
	}
}

const actions = {
	getMovie({commit}){
		Vue.http.jsonp('https://api.douban.com/v2/movie/in_theaters?count=8')
			.then(res=>{
				commit({
					type:'getMovie',
					tag:'hotMovies',
					res:res.body.subjects
				})
			})
		Vue.http.jsonp('https://api.douban.com/v2/movie/coming_soon?count=8')
            .then(res => {
              commit({
                type: 'getMovie',
                tag: 'newMovies',
                res: res.body.subjects
              })
            })
    	Vue.http.jsonp('https://api.douban.com/v2/movie/top250?count=8')
            .then(res => {
              commit({
                type: 'getMovie',
                tag: 'topMovies',
                res: res.body.subjects
              })
            })
	}
}

export default{
	state,
	mutations,
	actions
}