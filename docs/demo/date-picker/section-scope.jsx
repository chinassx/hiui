import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import DatePicker from '../../../components/date-picker'
const prefix = 'date-picker-scope'
const desc = '以天、周、月、年等粒度展示一个时间的范围'
const rightOptions = ['日期', '年份', '月份', '周', '日期时间']
const code = [
  {
    code: `import React from 'react'
import DatePicker from '@hi-ui/hiui/es/date-picker'\n
class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      rangeDate: {start: new Date(), end: new Date()} // 或 rangeDate: new Date()
    }
  }
  render () {
    return (
      <div>
        <DatePicker
          type='daterange'
          format='yyyy-MM-dd'
          defaultValue={this.state.rangeDate}
          onChange={(date, dateStr) => {console.log('onChange', date, dateStr)}}
        />
      </div>
    )
  }
}`,
    opt: ['日期']
  },
  {
    code: `import React from 'react'
import DatePicker from '@hi-ui/hiui/es/date-picker'\n
class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      rangeDate: {start: new Date(), end: new Date()} // 或 rangeDate: new Date()
    }
  }
  render () {
    return (
      <div>
        <DatePicker
          type='daterange'
          format='yyyy'
          defaultValue={this.state.rangeDate}
          onChange={(date, dateStr) => {console.log('onChange', date, dateStr)}}
        />
      </div>
    )
  }
}`,
    opt: ['年份']
  },
  {
    code: `import React from 'react'
import DatePicker from '@hi-ui/hiui/es/date-picker'\n
class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      rangeDate: {start: new Date(), end: new Date()} // 或 rangeDate: new Date()
    }
  }
  render () {
    return (
      <div>
        <DatePicker
          type='daterange'
          format='yyyy-MM'
          defaultValue={this.state.rangeDate}
          onChange={(date, dateStr) => {console.log('onChange', date, dateStr)}}
        />
      </div>
    )
  }
}`,
    opt: ['月份']
  },
  {
    code: `import React from 'react'
import DatePicker from '@hi-ui/hiui/es/date-picker'\n
class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      rangeDate: {start: new Date(), end: new Date()} // 或 rangeDate: new Date()
    }
  }
  render () {
    return (
      <div>
        <DatePicker
          type='weekrange'
          defaultValue={this.state.rangeDate}
          onChange={(date, dateStr) => {console.log('onChange', date, dateStr)}}
        />
      </div>
    )
  }
}`,
    opt: ['周']
  },
  {
    code: `import React from 'react'
import DatePicker from '@hi-ui/hiui/es/date-picker'\n
class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      rangeDate: {start: new Date(), end: new Date()} // 或 rangeDate: new Date()
    }
  }
  render () {
    return (
      <div>
        <DatePicker
          type="timeperiod"
          value={this.state.rangeDate}
          onChange={(date, dateStr) => {console.log('onChange', date, dateStr)}}
        />
      </div>
    )
  }
}`,
    opt: ['日期时间']
  }
]
const DemoScopeBan = () => (
  <DocViewer
    code={code}
    scope={{ DatePicker }}
    prefix={prefix}
    desc={desc}
    rightOptions={rightOptions}
  />
)
export default DemoScopeBan
