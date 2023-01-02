import Head from 'next/head'
import fade from '../metamask/fade-fox.json'
import beta from '../metamask/beta-fox.json'
import flask from '../metamask/flask-fox.json'
import fox from '../metamask/fox.json'
import gradient from '../metamask/gradient-fox.json'
import MetaLogo from '../metamask/MetaLogo'

export default function Home() {

  const meshes = [fade, beta, flask]
  return (
    <div className='mainContainer'>
      <Head>
        <title>MetaMask Animated Logo</title>
        <meta name="description" content="MetaMask Animated Logo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        meshes.map((item, index)=>(
          <MetaLogo meshJson={item} />
        ))
      }
      <MetaLogo />
    </div>
  )
}
