<template src="./demo01.html"></template>
<style src="./demo01.css"></style>

<script>
/* eslint-disable */

var str = 'this is my good work01dddd';
export default {
  name: 'demo01',
  data() {
    return {
      msg: str,
      log: new this.consolelog('hellow')
    };
  },
  methods: {
    consolelog(str) {
      this.flagStr = str;
      this.time = function () {
        // console.log( new Date())
      };
      this.flag = function (ddd) {
        console.log(`---${this.flagStr}---${str}---${ddd}---`);
      };
    }
  },
  beforeCreate: function () {
    // 事件初始后 组件创建前,无法使用this调用当前组件中的数据和方法
    console.log(`---beforeCreate---`);
    // this.log.time(); 报错
    //  this.log.flag();

    // 说明：
    // 1. 在不查阅文档前提下，请 60 分钟内在该页面上完成所有习题

    // 题目1. 基于 window.requestAnimationFrame 写一个动画函数，将一个 DOM 元素 ele 在 duration 内，从当前位置向右线平移 moveLength 像素

    // // 题目2. 写一个节流函数 (限制一个函数在一定时间内只执行一次)

    function throttle(func, duration) {
      let flag = 0;
      return function () {
        if (flag === 0) {
          flag = 1;
          setTimeout(() => {
            func();
            flag = 0;
          }, duration);
        }
      };
    }

    // 题目3. 有如下文本，请提取文本中的所有 URL

    const text =
      '这是一段文本https://www.showmebug.com/pads/LKGVGT这是一段文本http://www.showmebug.com这是一段文本http://showmebug.comm这是一段文本';

    function extractURLFromText(text) {
      if (!text) {
        return [];
      }
      return test.match(/[http|https]{1}:\/\/[a-z]+(\.\w+)+(\/\w+)*/);
    }

    console.log(extractURLFromText(text));

    // 题目4. 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。

    //   换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。

    //   （不能用 sort 和 filter）

    //   以数组形式返回答案。
    //   示例 ：

    //   输入：nums = [8,1,2,2,3]
    //   输出：[4,0,1,1,3]
    //   解释：
    //   对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。
    //   对于 nums[1]=1 不存在比它小的数字。
    //   对于 nums[2]=2 存在一个比它小的数字：（1）。
    //   对于 nums[3]=2 存在一个比它小的数字：（1）。
    //   对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。

    //   提示：

    //   2 <= nums.length <= 500
    //   0 <= nums[i] <= 100

    function smallerNumbersThanCurrent(nums) {
      let sortNums = nums.sort((a, b) => {
        return a - b > 0;
      });
      return nums.map((item) => {
        let n = sortNums.indexOf(item);
        return sortNums.slice(n).length;
      });
    }

    console.log(smallerNumbersThanCurrent([10, 1, 2, 2, 3]));

    // 题目5. 实现 atoi，将字符串转为整数。
    // 说明：
    // 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2 的 31 次方, 2 的 31次方 − 1]。如果数值超过可表示的范围，则返回 INT_MAX (2 的 31 次方 − 1) 或 INT_MIN (−2 的31次方) 。
    // 不能使用 parseInt

    // Example 1:
    // Input: ""

    // Output: 0

    // Example 2:

    // Input: "+2"
    // Output: 2

    // Example 3:

    // Input: "+"
    // Output: 0

    // Example 4:

    // Input: "-223pasudasd"
    // Output: -223

    // Example 5:

    // Input: "-91283472332"
    // Output: -2147483648

    // /**
    //  * @param {number[]} nums
    //  * @return {number[]}
    //  */

    function atoi(text) {
      let output = 0;
      let inputNum = text.match(/^[+|-|(\s+)][\d]*/)[0];
      if (!inputNum) {
        output = 0;
      } else {
        let num = inputNum.replace(/^[+|-|(\s+)]/, '');
        if (num > '2147483648') {
          if (inputNum.indexOf('-') !== -1) {
            return -2147483648;
          } else {
            return 2147483648;
          }
        } else {
          if (inputNum.indexOf('-') !== -1) {
            return Json.parse(num) * -1;
          } else {
            return Json.parse(num);
          }
        }
      }
      return output;
    }

    console.log(atoi('+1024'));
  },
  created: function () {
    // 组件创建后
    this.log.time();
    this.log.flag();
  },
  beforeMount: function () {
    // 模板渲染前
    this.log.time();
    this.log.flag.call(new this.consolelog('beforeMount'), 'sadsdsds');
    this.log.flag('sdsd');

    let ddddd = this.consolelog.call(
      new this.consolelog('beforeMount'),
      'sads1321ss32dassds'
    );
    console.log(ddddd);
    this.log.flag('sdasd');

    function Grade(max, min, average, ...aaa) {
      this.max = max;
      this.min = min;
      this.average = average;
      this.ggg = function () {
        console.log(aaa);
      };
    }

    function Subject(subjectName, arr) {
      Grade.apply(this, arr);
      this.subjectName = subjectName;
    }

    var math = new Subject('math', [1, 2, 3, 4, 5, 6]);
    console.log(math.ggg());
    /****************  不用new  ******************* */
    function getGrade(max, min, average, ...aaa) {
      let pro = Object.create(getGrade.prototype);
      pro.max = max;
      pro.min = min;
      pro.average = average;
      pro.ggg = function () {
        console.log(aaa);
      };
      return pro;
    }

    function Subject1(subjectName, arr) {
      getGrade.apply(this, arr);
      this.subjectName = subjectName;
    }

    var matha = new Subject1('math', [7, 8, 9, 4, 5, 8]);
    console.log(getGrade(1, 2, 3, 4, 5, 6.6));

    // 防抖
    function fangdou(event, t) {
      var timer = null;
      let fun = function () {
        if (!timer) {
          timer = setTimeout(() => {
            event();
          }, t);
        }
      };
    }

    function fun(name, title) {
      this.name = name;
      this.title = title;
    }
  },
  mounted: function () {
    //  模板渲染后、
    this.log.time();
    this.log.flag();
  },
  beforeUpdate: function () {
    // 数据更新时

    this.log.time();
    this.log.flag();
  },
  updated: function () {
    // 数据更新后

    this.log.time();
    this.log.flag();
  },
  beforeDestroy: function () {
    // 组件销毁前

    this.log.time();
    this.log.flag();
  },
  destroyed: function () {
    // 组件销毁后

    this.log.time();
    this.log.flag();
  }
};

//防抖
//fn:多次点击要触发的事件
// time:事件之间的最大间隔时间
function debounce(fun, time) {
  var timer = null;
  return function () {
    let arg = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fun.apply(this, arg);
    }, time);
  };
}

//节流一
//
function throttle1(fun, time) {
  var timer = null;
  return function () {
    let arg = arguments;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fun.apply(this, arg);
      clearTimeout(timer);
      timer = null;
    }, time);
  };
}

//节流二

function throttle2(fun, time) {
  var lastTime = 0;
  return function () {
    let arg = arguments;
    let newTime = new Date(); //Date.now()
    if (newTime - lastTime > time || !lastTime) {
      fun.apply(this, arg); // fun()
      lastTime = newTime;
    }
  };
}
</script>
