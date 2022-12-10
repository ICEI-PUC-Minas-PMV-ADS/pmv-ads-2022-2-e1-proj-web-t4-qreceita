import SearchClass from './dbfake_search.js'
import Forms from './app.js'

const search_top = new SearchClass('site-content22', 'form-search2')
const search_bottom = new SearchClass('site-content22', 'recipes_search_login2')

search_top.search_bar_top()

search_bottom.search_bars_bottom()

if(!search_bottom.returnFlagLog() && !search_top.returnFlagLog()){
 
        let myProfID = ['my_profile_login']
        const login =  new Forms('site-content22', myProfID)
        login.createFormLogin()

}