type Props = {
  height: number;
  width: number;
};

export const Logo = ({ height = 50, width = 100 }: Partial<Props>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 609 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="9" width="144" height="139" rx="30" fill="#F8A934" />
      <rect x="25" y="116" width="8" height="31" fill="#0A831D" />
      <rect x="56" y="138" width="8" height="9" fill="#FC1818" />
      <rect x="39" y="129" width="10" height="18" fill="#29B7F4" />
      <path
        d="M151 14.5C151 17.3677 150.087 20.1609 148.393 22.4747C146.699 24.7886 144.312 26.5029 141.578 27.3692C138.845 28.2356 135.906 28.2089 133.189 27.293C130.471 26.3772 128.116 24.6198 126.464 22.2755C124.812 19.9312 123.95 17.1219 124.002 14.2547C124.054 11.3875 125.018 8.61134 126.754 6.32864C128.49 4.04593 130.907 2.37527 133.656 1.55877C136.405 0.742271 139.343 0.822365 142.043 1.78744L137.5 14.5H151Z"
        fill="#464CED"
      />
      <path
        d="M143.314 0.521332C146.414 1.43129 149.201 3.13859 151.311 5.42002C153.421 7.70144 154.756 10.4508 155.142 13.3087L139.357 14L143.314 0.521332Z"
        fill="#C01111"
      />
      <path
        d="M208.909 69C209.182 66 208.455 63.6515 206.727 61.9545C205 60.2273 202.091 59.3636 198 59.3636C195.394 59.3636 193.212 59.6667 191.455 60.2727C189.727 60.8788 188.379 61.7121 187.409 62.7727C186.47 63.8333 185.879 65.0606 185.636 66.4545C185.364 67.5455 185.379 68.5455 185.682 69.4545C186.015 70.3333 186.636 71.1364 187.545 71.8636C188.485 72.5909 189.712 73.2424 191.227 73.8182C192.773 74.3939 194.606 74.9091 196.727 75.3636L204 77C208.97 78.0909 213.136 79.5303 216.5 81.3182C219.894 83.0758 222.561 85.1667 224.5 87.5909C226.439 90.0152 227.712 92.7273 228.318 95.7273C228.955 98.7273 228.97 102 228.364 105.545C227.333 111.667 224.955 116.848 221.227 121.091C217.5 125.333 212.636 128.561 206.636 130.773C200.636 132.985 193.697 134.091 185.818 134.091C177.758 134.091 170.909 132.894 165.273 130.5C159.667 128.076 155.606 124.379 153.091 119.409C150.606 114.409 150 108.03 151.273 100.273H175.273C174.909 103.121 175.212 105.515 176.182 107.455C177.152 109.394 178.712 110.864 180.864 111.864C183.015 112.864 185.697 113.364 188.909 113.364C191.636 113.364 193.97 113.03 195.909 112.364C197.848 111.697 199.379 110.773 200.5 109.591C201.621 108.409 202.303 107.061 202.545 105.545C202.788 104.152 202.545 102.909 201.818 101.818C201.091 100.727 199.773 99.7424 197.864 98.8636C195.955 97.9848 193.333 97.1818 190 96.4545L181.091 94.4545C173.182 92.6364 167.212 89.6364 163.182 85.4545C159.152 81.2727 157.727 75.5455 158.909 68.2727C159.879 62.3333 162.318 57.1515 166.227 52.7273C170.167 48.2727 175.167 44.8182 181.227 42.3636C187.318 39.8788 194.061 38.6364 201.455 38.6364C208.97 38.6364 215.258 39.8939 220.318 42.4091C225.409 44.9242 229.061 48.4545 231.273 53C233.515 57.5455 234.121 62.8788 233.091 69H208.909ZM284.159 102.455L290.705 63.1818H315.795L304.159 133H280.341L282.523 119.727H281.795C279.644 124.182 276.432 127.667 272.159 130.182C267.917 132.667 263.189 133.909 257.977 133.909C253.098 133.909 249.023 132.788 245.75 130.545C242.477 128.303 240.159 125.212 238.795 121.273C237.432 117.333 237.159 112.818 237.977 107.727L245.432 63.1818H270.523L263.977 102.455C263.462 105.909 263.902 108.621 265.295 110.591C266.72 112.561 269.008 113.545 272.159 113.545C274.25 113.545 276.129 113.106 277.795 112.227C279.492 111.318 280.886 110.045 281.977 108.409C283.098 106.742 283.826 104.758 284.159 102.455ZM316.92 133L328.557 63.1818H352.92L350.739 76.4545H351.466C353.557 71.5455 356.178 67.9545 359.33 65.6818C362.481 63.4091 365.92 62.2727 369.648 62.2727C370.739 62.2727 371.784 62.3636 372.784 62.5455C373.814 62.697 374.83 62.9091 375.83 63.1818L372.193 84.6364C371.011 84.1818 369.542 83.8636 367.784 83.6818C366.027 83.4697 364.466 83.3636 363.102 83.3636C360.678 83.3636 358.405 83.9242 356.284 85.0455C354.193 86.1364 352.405 87.6818 350.92 89.6818C349.466 91.6515 348.496 93.9697 348.011 96.6364L342.011 133H316.92ZM456.545 63.1818L421.455 133H392.364L380.545 63.1818H406L409.636 109.364H410.364L429.273 63.1818H456.545ZM483.193 134.273C475.739 134.273 469.557 132.848 464.648 130C459.739 127.121 456.284 123 454.284 117.636C452.284 112.242 451.92 105.788 453.193 98.2727C454.405 91.0606 456.905 84.7576 460.693 79.3636C464.511 73.9697 469.314 69.7727 475.102 66.7727C480.92 63.7727 487.436 62.2727 494.648 62.2727C499.92 62.2727 504.542 63.0909 508.511 64.7273C512.511 66.3636 515.769 68.7424 518.284 71.8636C520.799 74.9848 522.496 78.7576 523.375 83.1818C524.284 87.5758 524.284 92.5455 523.375 98.0909L522.466 103.909H460.102L462.284 90.0909H501.557C501.86 88.0909 501.663 86.3333 500.966 84.8182C500.299 83.2727 499.223 82.0758 497.739 81.2273C496.284 80.3485 494.527 79.9091 492.466 79.9091C490.405 79.9091 488.466 80.3485 486.648 81.2273C484.86 82.1061 483.33 83.3333 482.057 84.9091C480.814 86.4848 479.981 88.3333 479.557 90.4545L476.83 105C476.466 107.242 476.602 109.242 477.239 111C477.875 112.758 478.981 114.136 480.557 115.136C482.133 116.136 484.163 116.636 486.648 116.636C488.345 116.636 489.951 116.409 491.466 115.955C493.011 115.47 494.375 114.773 495.557 113.864C496.769 112.924 497.739 111.788 498.466 110.455H521.375C519.739 115.303 517.148 119.515 513.602 123.091C510.087 126.636 505.754 129.394 500.602 131.364C495.481 133.303 489.678 134.273 483.193 134.273ZM537.045 159.182C534.136 159.182 531.424 158.955 528.909 158.5C526.394 158.076 524.197 157.485 522.318 156.727L530.773 138.909C532.712 139.636 534.5 140.106 536.136 140.318C537.803 140.53 539.273 140.409 540.545 139.955C541.818 139.5 542.864 138.636 543.682 137.364L544.5 136.091L532.045 63.1818H557.318L560.5 111.545H561.227L580.773 63.1818H608.045L570.045 138.818C568.106 142.667 565.682 146.121 562.773 149.182C559.894 152.273 556.348 154.712 552.136 156.5C547.924 158.288 542.894 159.182 537.045 159.182Z"
        fill="white"
      />
      <path
        d="M35.5455 125L37.9091 111L91.7273 52.2727H47.7273L51.1818 31.9091H127.182L124.818 45.9091L71 104.636H115L111.545 125H35.5455Z"
        fill="white"
      />
    </svg>
  );
};
