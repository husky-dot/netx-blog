
import { GetServerSideProps, NextPage } from 'next'
import {UAParser} from 'ua-parser-js'
import { useState, useEffect } from 'react'
import { createConnection, getConnection} from 'typeorm'

type Props = {
  browser: {
    name: string,
    version: string;
    major: string
  }
}

const index: NextPage<Props> = (props) => {
  console.log(props)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const w = document.documentElement.clientWidth
    setWidth(w)
  }, [])
  return (
    <div className="container">
      <h1>你的浏览器是 {props.browser.name}</h1>
      <h1>你的浏览器是 {width}px</h1>
    </div>
  )
}
export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const connect = await getConnection()
  console.log('connect', connect)
  const ua = context.req.headers['user-agent']
  const result = new UAParser(ua).getResult()
  return {
    props: {
      browser: result.browser
    }
  }
}

