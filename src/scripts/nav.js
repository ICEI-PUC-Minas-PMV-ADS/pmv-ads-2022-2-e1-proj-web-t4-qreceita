import SearchClass from './dbfake_search.js'

const search_top = new SearchClass('site-content22', 'form-search2')
const search_bottom = new SearchClass('site-content22', 'recipes_search_login2')

search_top.search_bar_top()

search_bottom.search_bars_bottom()

var pageInit = document.getElementsByClassName('nav-links')[0].style
pageInit.backgroundColor = '#9dab86'
pageInit.color = 'white'