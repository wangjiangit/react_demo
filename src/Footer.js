import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    static description='React footer';
    copyrightTips=this.copyrightTips.bind(this);  //实例属性,将copyrightTips方法绑定到copyrightTips属性
    render() {
        return (
         <footer >
             {Footer.description} <span>{this.props.copyright}</span>
             <button onClick={this.copyrightTips}>版权提示</button>
             <a href="#" onClick={(e)=>{e.preventDefault();alert('具体信息请访问,http://www.5izan.com')}}>版权具体信息</a>
         </footer>
        );
    }

    //事件监听函数，事件对象参数e,要在所有自定义参数后面
    copyrightTips(e){
        alert('这是5izan.com版权信息，请知晓');
    }


}

export default Footer;

