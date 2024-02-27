
'use client'

import { Ads } from "./(index)/ads2"
import { AdblockDetector } from 'adblock-detector';

export default function Template({ children }) {

const adbDetector = new AdblockDetector() // call 

const userHasAdblock = adbDetector.detect() // detect adblock it return ture or false
  console.log({userHasAdblock})
  return (
    <>

      {/* {!userHasAdblock ? <Ads /> : null} */}

      <main className="py-12 container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="lg:w-3/4 xl:w-2/4 mx-auto"> {children} </div>

        <footer>JUST TO BE NOT EMPTY</footer>
      </main>
    </>
  )

}