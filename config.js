var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的猪猪",  // 同上...
        "今天是你的生日",
        "也是我们在一起的",
        "第415天！",
        "这段时间来，我见过你",
        "扁嘴的样子",
        "哭哭的样子",
        "睡觉的样子",
        "亲亲的样子",
        "都是我喜欢的样子",
        "但是，我还是最喜欢你跟我在一起的样子",
        "一起吃饭",
        "一起扁嘴",
        "一起亲亲",
        "一起装傻",
        "一起标准笑容",
        "生日快乐我的猪猪~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我":"./imgs/songxinxin.jpg",
        "心爱的猪猪":"./imgs/zhuzhu.jpg",
        //"今天是你的生日":"./imgs/songxinxin.jpg",
        //"也是我们在一起的":"./imgs/songxinxin.jpg",
        "第415天！":"./imgs/sha1.jpg",
        //"这段时间来，我见过你":"./imgs/songxinxin.jpg",
        "扁嘴的样子":"./imgs/bianzui.jpg",
        "哭哭的样子":"./imgs/kuku.jpg",
        "睡觉的样子":"./imgs/shuijiao.jpg",
        "亲亲的样子":"./imgs/qinqin.jpg",
        "都是我喜欢的样子":"./imgs/aini.jpg",
        "但是，我还是最喜欢你跟我在一起的样子":"./imgs/zaiyiqi.jpg",
        "一起吃饭":"./imgs/yiqichifan.jpg",
        "一起扁嘴":"./imgs/yiqibianzui.jpg",
        "一起亲亲":"./imgs/yiqiqinqin.jpg",
        "一起装傻":"./imgs/sha2.jpg",
        "一起标准笑容":"./imgs/longmao.jpg",
        "生日快乐我的猪猪~":"./imgs/meimei.jpg",
    },

    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "来点音乐",
        bannar_coming: "搞点颜色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "猪猪生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '爱你的猪猪~'
};