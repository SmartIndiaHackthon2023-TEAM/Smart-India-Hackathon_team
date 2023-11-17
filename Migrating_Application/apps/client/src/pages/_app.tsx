import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { useRecoilState , useRecoilValue , useSetRecoilState } from 'recoil'
import { userState } from 'store';
import axios from 'axios';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return <RecoilRoot>
          <App2 Component = {Component} pageProps={pageProps}/>
        </RecoilRoot> 
}

export function App2({Component , pageProps}:{Component : any , pageProps : any})
{
  <ActiveUser/>
  return <div>
            <Component {...pageProps} />
        </div>
}

function ActiveUser() {
  const setUser = useSetRecoilState(userState);
  const AU = async() => {
      try {
          const response = await axios.get("http://localhost:3000/me",{
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
              }
          })

          if (response.data.username) {
              setUser({
                  isLoading: false,
                  userEmail: response.data.username
              })
          } else {
              setUser({
                  isLoading: false,
                  userEmail: null
              })
          }
      } catch (e) {

          setUser({
              isLoading: false,
              userEmail: null
          })
      }
  };

  useEffect(() => {
    AU();
}, []);

return <></>
}