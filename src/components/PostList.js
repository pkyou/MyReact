import React, {Component} from 'react'
export default class PostList extends Component{
    render(){
        return(
            <div>
                帖子列表：
                <ul>
                    <li>大家来讨论</li>
                    <li>你爱谁</li>
                    <li>谁爱你</li>
                </ul>
            </div>
        )
    }
}