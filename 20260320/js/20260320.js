const ViewObj = {  // 這一行不要動

  // 遊戲相關連結
  facebook: "https://www.facebook.com/jadedynasty.games",
  youtube: "https://www.youtube.com/@iwplayxxa?sub_confirmation=1",
  home: "https://www.mhxzx.com.tw/",
  download: "https://pse.is/wanlin",

  // 活動一 (江湖五載 初心不改)
  event1: "指定期間<span>2025/2/19 11:00 - 2025/3/28 23:59</span>首次登入遊戲帳號領<span>江湖初心禮</span>",
  finish: "恭喜獲得「江湖初心禮」",

  // 活動二 (陣營對抗開打 擊殺BOSS)
  event2_step01: "歡迎來到美麗的長留仙島！<span>全新PVP玩法「滄溟曆戰」</span>即將開啟，請選擇欲加入的陣營，<span>擊倒BOSS</span>為所屬陣營賺取豐厚獎勵吧！",
  event2_step02: "即日起至<span>2025/3/27 23:59</span>，每日登入遊戲可獲得一次攻擊，<span>邀請好友</span>可再獲取<span>更多攻擊次數</span><span class='tt'>(單日上限成功邀請三位好友，單日最多可獲得四次攻擊機會，次數限制將於每日00:00重置)</span>",
  event2_rule: [
    "【被邀請者】需由【邀請連結】登入活動網頁，非經由邀請連結登入網頁，視為自行參加預約活動。後續再從邀請連結登入網頁則判定邀請無效。",
    "【被邀請者】無法重複接受邀請；若該【被邀請者】已成為Ａ玩家邀請對象且登入成功，則無法成為其他玩家邀請對象。",
    "每日登入遊戲獲得乙次攻擊次數，將於隔日計算於活動網頁中。例如：2/19 登入遊戲，活動頁將於 2/20 中午12:00 成功計算於活動網頁。",
    "BOSS血條進度非即時更新，須待技術作業再請玩家耐心等候，對應的進度獎勵將於2025/3/28統一寄送至獎勵查詢中，請玩家登入網頁確認並完成領取。",
    "本活動獲得之虛寶獎勵以序號發送，請於遊戲內登入帳號兌換之。",
    "所有獎勵物品皆為綁定不可交易，亦不得要求兌換、折抵或轉換其它產品。逾時未兌換視同放棄權利。",
    "艾玩天地保有以上活動及獎項內容修改之權利，並有權決定修改、取消、暫停或終止活動及贈送內容，最新詳情請見官方公告。",
  ],
  event2_reward_list: [
    {
      reward: "<span>頭獎</span><div class='icon'><img src='https://images1.iwplay.com.tw/image/xxa/events/20250219/images/popup/icon01.webp'></div><div class='icon'><img src='https://images1.iwplay.com.tw/image/xxa/events/20250219/images/popup/icon02.webp'></div><div class='icon'><img src='https://images1.iwplay.com.tw/image/xxa/events/20250219/images/popup/icon03.webp'></div><span class='tt'>專屬稱號:五周年蛇巴拉系!、腳印-奔霄輝*(永久)*1、千千結紅武魂自選*1</span>",
      support: "攻擊值 1000"
    },
    {
      reward: "<span>二獎</span><div class='icon'><img src='https://images1.iwplay.com.tw/image/xxa/events/20250219/images/popup/icon01.webp'></div><div class='icon'><img src='https://images1.iwplay.com.tw/image/xxa/events/20250219/images/popup/icon02.webp'></div><span class='tt'>專屬稱號:五周年蛇巴拉系! 、腳印-奔霄輝*(30天)*1</span>",
      support: "攻擊值 100"
    },
    {
      reward: "<span>三獎</span><div class='icon'><img src='https://images1.iwplay.com.tw/image/xxa/events/20250219/images/popup/icon04.webp'></div><span class='tt'>綁元*666</span>",
      support: "攻擊值 75"
    },
    {
      reward: "<span>四獎</span><div class='icon'><img src='https://images1.iwplay.com.tw/image/xxa/events/20250219/images/popup/icon05.webp'></div><span class='tt'>1級隨機名師禮包*1</span>",
      support: "攻擊值 50"
    },
    {
      reward: "<span>五獎</span><div class='icon'><img src='https://images1.iwplay.com.tw/image/xxa/events/20250219/images/popup/icon04.webp'></div><div class='icon'><img src='https://images1.iwplay.com.tw/image/xxa/events/20250219/images/popup/icon06.webp'></div><span class='tt'>綁元*50、洗髓丹*10</span>",
      support: "攻擊值 30"
    },
    {
      reward: "<span>六獎</span><div class='icon'><img src='https://images1.iwplay.com.tw/image/xxa/events/20250219/images/popup/icon07.webp'></div><span class='tt'>檀香*2</span>",
      support: "攻擊值 1"
    }
  ],

  // 注意事項
  notice: [
    "活動一【預約新賽季】活動期間：2026/03/20-2026/04/20 首次登入會員帳號之用戶，即可獲得「深空夜襲禮包」，每個帳號現領一次，於完成登入後7個工作日內發送至遊戲帳號。",
    "活動一【預約新賽季】贈送之4週年限定坐騎「夢豬」為3/26遊戲改版維護後自動發送至遊戲帳號，4週年限定套裝「逐光者」於新賽季活動免費獲取。",
    "活動二【永夜將至，決戰將起】各階段全服累積獎勵，將於3/26遊戲改版維護後，結算最終累積人數，發送對應階段獎勵至活動參與帳號，於7個工作日內完成獎勵發送。",
    "版本預告宣傳區塊僅供參考請以遊戲內實際當期活動內容為主。",
    "本活動僅限台港澳地區玩家參與。",
    "所有獎勵物品皆為綁定不可交易，亦不得要求兌換、折抵或轉換其它產品。",
    "每個獎勵序號皆有使用期限，請盡早兌獎以保障您的權利。",
    "本活動網頁開放查詢時間至2026/04/30 23:59截止。",
    "艾玩天地保有以上活動及獎項內容修改之權利，並有權決定修改、取消、暫停或終止活動",
    "最新詳情請見官方粉絲團或官網公告。"
  ],

}   // 這一行不要動