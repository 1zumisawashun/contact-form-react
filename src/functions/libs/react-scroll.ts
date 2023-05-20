import { scroller } from 'react-scroll'

const options = {
  duration: 1000,
  delay: 0,
  smooth: true,
  offset: -80
}

/**
 * NOTE:使い方（https://github.com/fisshy/react-scroll）
 * 1,Input○○.tsxにscrollIdをpropsとして渡す
 * 2,下記のscrollHookをスクロールさせたいイベントハンドラに仕込む（react-hook-formならonErrorとか）
 */
export const scrollHook = (name: string) => {
  scroller.scrollTo(name, options)
}
