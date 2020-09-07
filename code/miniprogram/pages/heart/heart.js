// miniprogram/pages/heart/heart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const query = wx.createSelectorQuery()
    query.select('#myCanvas')
      .fields({
        node: true,
        size: true
      })
      .exec((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 300, 200, 300)

       

        let gradient = ctx.createLinearGradient(0, 0, 200, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        ctx.fillStyle = gradient;
        ctx.font = "20px Verdana";

        ctx.fillText('I', 20, 20)

        setTimeout(() => {
          ctx.font="20px"
          ctx.fillText('L', 40, 20)
        }, 200)

        setTimeout(() => {
          ctx.fillText('O', 55, 20)
        }, 400)

        setTimeout(() => {
          ctx.fillText('V', 70, 20)
        }, 600)

        setTimeout(() => {
          ctx.fillText('E', 85, 20)
        }, 800)

        setTimeout(() => {
          ctx.fillText('Y', 120, 20)
        }, 1000)

        setTimeout(() => {
          ctx.fillText('O', 135, 20)
        }, 1200)

        setTimeout(() => {
          ctx.fillText('U', 150, 20)
        }, 1400)

      })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  scrollit() {

  }
})