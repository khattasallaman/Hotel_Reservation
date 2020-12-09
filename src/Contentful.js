import {createClient} from 'contentful';
import config from './config'
export default createClient({
    space: config.SPACE,
    accessToken:config.ACCESS_TOKEN
})