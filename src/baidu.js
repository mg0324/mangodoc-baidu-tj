export default {
    ready(){
        console.info("[mangodoc-baidu-tj] ready");
        if(!window.$mangodoc.baiduTjId){
            console.warn("[mangodoc-baidu-tj] baiduTjId not config")
            return ;
        }
        var id = window.$mangodoc.baiduTjId;
        var host = window.location.host;
        if(host.startsWith("localhost") || host.startsWith("127.0.0.1")){
            console.warn("[mangodoc-baidu-tj] local ip not collect")
            return ;
        }
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?"+id;
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        console.info("mangodoc-baidu-tj init success!")
    }
}