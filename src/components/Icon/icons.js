import React from 'react';

const Icons = {
    logout: (width = 42, height = 42, fill = null) => (
        <svg
            // fill={fill}
            width={width}
            height={height}
            viewBox="0 0 512.00533 512"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m320 277.335938c-11.796875 0-21.332031 9.558593-21.332031 21.332031v85.335937c0 11.753906-9.558594 21.332032-21.335938 21.332032h-64v-320c0-18.21875-11.605469-34.496094-29.054687-40.554688l-6.316406-2.113281h99.371093c11.777344 0 21.335938 9.578125 21.335938 21.335937v64c0 11.773438 9.535156 21.332032 21.332031 21.332032s21.332031-9.558594 21.332031-21.332032v-64c0-35.285156-28.714843-63.99999975-64-63.99999975h-229.332031c-.8125 0-1.492188.36328175-2.28125.46874975-1.027344-.085937-2.007812-.46874975-3.050781-.46874975-23.53125 0-42.667969 19.13281275-42.667969 42.66406275v384c0 18.21875 11.605469 34.496093 29.054688 40.554687l128.386718 42.796875c4.351563 1.34375 8.679688 1.984375 13.226563 1.984375 23.53125 0 42.664062-19.136718 42.664062-42.667968v-21.332032h64c35.285157 0 64-28.714844 64-64v-85.335937c0-11.773438-9.535156-21.332031-21.332031-21.332031zm0 0" />
            <path d="m505.75 198.253906-85.335938-85.332031c-6.097656-6.101563-15.273437-7.9375-23.25-4.632813-7.957031 3.308594-13.164062 11.09375-13.164062 19.714844v64h-85.332031c-11.777344 0-21.335938 9.554688-21.335938 21.332032 0 11.777343 9.558594 21.332031 21.335938 21.332031h85.332031v64c0 8.621093 5.207031 16.40625 13.164062 19.714843 7.976563 3.304688 17.152344 1.46875 23.25-4.628906l85.335938-85.335937c8.339844-8.339844 8.339844-21.824219 0-30.164063zm0 0" />
        </svg>
    ),
    overview: (width = 42, height = 42, fill = null) => (
        <svg fill={fill} width={width} height={height} xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1000 1000">
            <path
                d="M483.2 607.6v-4402.3h3672.4c3475.9 0 3672.4 2.5 3682.7 45.9 5.1 23 7.6 479.8 5.1 1013.2l-2.6 969.8-201.5 183.8c-112.3 102-209.3 186.3-219.5 186.3-12.8 0-20.4-441.5-20.4-982.6v-982.5H917.1v7936.9h6482.2V2312.4l-2.5-2266.3 211.8-196.5c117.4-107.2 216.9-191.4 222-183.8 7.7 5.1 12.8 1209.7 12.8 2677.1L7846 5010H483.2V607.6z"
                transform="matrix(.1 0 0 -.1 0 511)"
            ></path>
            <path
                d="M4528.3 4124.4c-288.4-35.7-676.3-168.4-923.9-319-1342.4-809-1541.5-2669.5-400.7-3749C3920.9-619.9 5000.4-773 5888.5-326.4 6756.2 110 7264.1 1041.5 7167.1 2019c-30.6 303.7-84.2 484.9-229.7 783.5-339.4 704.4-952 1166.3-1725.2 1301.6-201.6 35.6-497.6 43.3-683.9 20.3zm714.5-714.6c84.2-20.4 239.9-79.1 344.5-130.2 257.8-125.1 587-451.7 722.2-712 449.2-867.7 99.5-1896.2-786-2319.8-191.4-91.9-497.7-163.3-701.8-163.3-408.3 0-877.9 191.4-1168.8 479.8-321.6 316.4-482.4 673.7-507.9 1117.8-28.1 505.3 130.2 918.8 487.4 1276 114.8 112.3 270.5 239.9 347.1 283.3 382.9 216.9 826.9 275.6 1263.3 168.4z"
                transform="matrix(.1 0 0 -.1 0 511)"
            ></path>
            <path
                d="M5013.1 2483.4c-132.7-53.6-211.8-222-165.9-347.1 25.5-63.8 7.7-99.5-214.4-433.9-219.5-326.7-250.1-364.9-313.9-362.4-40.8 2.5-97-5.1-130.1-15.3-43.4-15.3-89.3 7.7-206.7 99.5-125.1 97-150.6 132.7-150.6 191.4 5.1 178.7-120 306.3-298.6 306.3-74 0-114.8-20.4-181.2-86.8-71.5-71.5-86.8-104.6-86.8-199.1 0-61.3 17.9-137.8 40.8-171 58.7-81.7 199.1-135.3 301.1-117.4 74 15.3 102.1 2.6 237.4-112.3 122.5-99.5 158.2-148 171-222 10.2-51 51-127.6 91.9-168.4 58.7-58.7 94.4-71.5 191.4-71.5 102.1 0 132.7 12.8 209.3 89.3 79.1 79.1 86.8 97 79.1 222-5.1 132.7 0 142.9 229.7 487.4 181.2 268 247.6 349.6 290.9 349.6 30.6 0 91.9 12.8 137.8 30.6 76.6 25.5 94.4 20.4 262.9-79.1 99.5-58.7 181.2-125.1 181.2-145.5 0-127.6 153.1-265.4 293.5-265.4 303.7 0 403.2 436.4 127.6 551.3-109.7 45.9-160.8 45.9-250.1-2.6-66.4-33.2-79.1-30.6-250.1 68.9-99.6 56.1-186.3 122.5-194 145.5-43.4 140.4-76.6 191.4-145.5 234.8-84.1 51.3-173.4 59-257.7 23.2zM8165 3797.8v-216.9h408.4v-4593.8l109.7-97c58.7-53.6 155.7-142.9 216.9-196.5l107.2-94.4v5415.6H8165v-217zM6695-53.3L6485.7-260l1020.8-918.8c1743.1-1569.5 1559.3-1416.4 1699.7-1416.4 137.8 0 216.9 45.9 273.1 153.1 56.1 107.2 48.5 234.8-17.9 326.7-68.9 94.4-2490.8 2261.1-2531.7 2266.2-15.2 2.6-122.4-89.3-234.7-204.1zM1708.2-1038.4v-229.7h5027.6v459.4H1708.2v-229.7zM1708.2-2365.5v-229.7h5027.6v459.4H1708.2v-229.7zM8573.3-3396.6v-959.6H2091v306.2h-459.4v-740h7375.6v2011l-84.2 53.6c-45.9 28-112.3 81.6-145.5 117.4-35.7 38.3-94.4 91.9-132.7 119.9l-71.4 48.5v-957z"
                transform="matrix(.1 0 0 -.1 0 511)"
            ></path>
        </svg>
    ),
    analytics: (width = 42, height = 42, fill = null) => (
        <svg fill={fill} width={width} height={height} xmlns='http://www.w3.org/2000/svg' x='0' y='0' viewBox='0 0 1000 1000'>
            <path
                d='M7904.3 4802.8L7552 4595.7l-6.4-418.6-4.3-416.4 89.7-51.2c51.2-27.8 96.1-51.3 100.4-55.5 12.8-10.7-1281.3-1738.3-1302.7-1738.3-8.5 0-89.7 42.7-177.3 94l-158 94-292.6-170.8-292.6-170.8-435.6 290.4-435.6 290.2v401.5l-2.1 399.4-363 207.1-365.3 209.3-360.9-209.3-360.9-207.1v-431.4c0-412.2 2.1-431.4 42.7-444.2 23.5-6.4 42.7-19.2 42.7-27.8 0-8.6-301.1-316.1-668.4-683.4l-670.6-670.6-106.7 59.8-106.8 59.8-365.2-209.3-367.3-211.4V-252l365.2-209.3 365.2-211.4 68.3 36.3c36.3 19.2 200.7 115.3 365.2 211.4l299 175.1v828.6l-70.5 47c-38.4 27.8-81.2 51.3-96.1 57.7-25.6 8.5 1281.3 1360.3 1317.6 1360.3 10.7 0 83.3-36.3 162.3-83.3l143.1-81.2 207.1 117.5 207.1 117.5 521.1-348.1L5363 1418V837.1l365.2-209.3 365.2-209.3 360.9 209.3 360.9 209.3v418.6c0 339.6-6.4 425-29.9 446.3-27.8 21.4 70.5 162.3 610.8 882 354.5 471.9 647.1 862.8 651.3 867 4.3 6.4 59.8-17.1 121.7-51.2l113.2-61.9 367.3 209.3 365.2 211.4v837.2l-363 209.3c-198.6 113.2-369.4 207.2-378 205-8.6-.1-175.1-94.1-369.5-207.3zm636.4-350.2l111.1-64.1v-412.2l-173-102.5c-96.1-55.5-183.7-100.4-198.6-100.4-12.8 0-96.1 40.6-183.7 91.8l-160.2 91.8v444.2l170.8 100.4 170.8 102.5 74.7-44.8c40.8-23.4 126.2-72.5 188.1-106.7zM4100.9 3032.5l173-102.5V2515.7l-143.1-83.3c-81.1-47-164.4-94-187.9-104.6-34.2-19.2-76.9-4.3-217.8 76.9l-177.2 98.2v433.5l166.6 98.2c89.7 53.4 175.1 96.1 187.9 98.2 14.9 0 102.4-44.8 198.5-100.3zm2174-1452.2l177.2-100.4V1050.6l-179.4-102.5-179.4-102.5-183.7 102.5-183.7 102.5 2.1 213.6v213.6l175.1 100.4c96.1 55.5 179.4 102.5 183.7 102.5 4.5 0 89.9-44.9 188.1-100.4zM1897.1 491.2l177.2-102.5V-44.8l-175.1-102.5-175.1-100.4-94 51.2c-53.4 27.8-136.7 76.9-187.9 108.9l-94 59.8V375.9l177.2 106.8c96.1 57.7 179.4 106.8 183.7 106.8 6.5 2.1 89.7-42.8 188-98.3z'
                transform='matrix(.1 0 0 -.1 0 511)'
            ></path>
            <path
                d='M7541.3-1330.4V-4427h-726v3288.8H5363V-4427h-726V313.9H3184.8V-4427h-726l-4.3 914-6.4 911.9H995.9l-6.4-911.9-4.3-914h-726v-363h9481.7v363h-726v6193H7541.3v-3096.4zm1110.5-181.5v-2915h-726v5830h726v-2915zM4273.9-2238v-2189h-726V-49.1h726V-2238zm2178.3-726.1V-4427h-726v2925.6h726v-1462.7zm-4377.9-736.8V-4427h-726v1452.2h726v-726.1z'
                transform='matrix(.1 0 0 -.1 0 511)'
            ></path>
        </svg>
    ),
    history: (width = 42, height = 42, fill = null) => (
        <svg fill={fill} width={width} height={height} xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1000 1000">
            <path d="M243.1 696.4v48.9h123.2c-.6-8.1-.9-16.2-.9-24.5 0-8.2.3-16.4.9-24.5H243.1zm189.7-171.2H243.1v48.9h158.2c9-17.3 19.6-33.7 31.5-48.9zM536.7 11.4H389.9v48.9h146.8V11.4zM454 941.1H120.8c-13.5 0-24.5-11-24.5-24.5V84.8c0-13.5 11-24.5 24.5-24.5h117.3c15.5 5.3 29.1 18.6 29.5 48.9.5 53.5 73.4 48.9 73.4 48.9h244.6s68.5 0 73.4-56c2.2-25.3 14.8-36.9 29-41.8h117.8c13.5 0 24.5 11 24.5 24.5v353.9c17.3 9 33.7 19.6 48.9 31.5V60.4c0-27-21.9-48.9-48.9-48.9H683.5S610.1-3 610.1 60.4c0 33.6-20.6 45.3-40 48.9H364c-21.1-2.6-47.4-13.1-47.4-48.9 0-59.9-73.4-48.9-73.4-48.9H96.3c-27 0-48.9 21.9-48.9 48.9v880.7c0 27 21.9 48.9 48.9 48.9h417.6c-21.9-13.8-42-30.3-59.9-48.9zm229.5-587.2H243.1v48.9h440.4v-48.9zm0 97.9c-148.6 0-269.1 120.5-269.1 269.1 0 148.6 120.5 269.1 269.1 269.1s269.1-120.5 269.1-269.1c0-148.6-120.5-269.1-269.1-269.1zm146.8 293.6H659V574.1h48.9v122.3h122.3v49z"></path>
        </svg>
    ),
    addOrder: (width = 42, height = 42, fill = null) => (
        <svg fill={fill} width={width} height={height} xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1000 1000">
            <path d="M622.5 132.5h20.4c49.4 0 90.6 35.1 100.1 81.7h22.4c56.4 0 102.2 45.6 102.2 102.2v571.4c0 56.5-45.7 102.2-102.2 102.2H234.7c-56.4 0-102.2-45.6-102.2-102.2V316.4c0-56.5 45.7-102.2 102.2-102.2H257c9.5-46.6 50.6-81.7 100.1-81.7h20.4C377.5 64.8 432.3 10 500 10s122.5 54.8 122.5 122.5zM255 255h-20.5c-33.9 0-61.2 27.4-61.2 61.3v571.6c0 33.9 27.4 61.3 61.2 61.3h531c33.9 0 61.2-27.4 61.2-61.3V316.3c0-33.9-27.4-61.3-61.2-61.3H745v81.7H255V255zm0 163.3h122.5v122.5H255V418.3zm0 163.4h122.5v122.5H255V581.7zm0 163.3h122.5v122.5H255V745zm245-551.2c33.8 0 61.3-27.4 61.3-61.3 0-33.8-27.4-61.3-61.3-61.3-33.8 0-61.3 27.4-61.3 61.3.1 33.8 27.5 61.3 61.3 61.3zm-40.8 592H745v40.8H459.2v-40.8zm0-163.3H745v40.8H459.2v-40.8zm0-163.3H745V500H459.2v-40.8zM295.8 785.8h40.8v40.8h-40.8v-40.8zm0-163.3h40.8v40.8h-40.8v-40.8zm0-163.3h40.8V500h-40.8v-40.8z"></path>
        </svg>
    ),
    category: (width = 42, height = 42, fill = null) => (
        <svg fill={fill} width={width} height={height} xmlns='http://www.w3.org/2000/svg' x='0' y='0' viewBox='0 0 1000 1000'>
            <path d='M382.2 11.4h-293C45.6 11.4 10 44.9 10 88.6v286.7c0 43.7 35.6 83.8 79.2 83.8h293c43.6 0 79.2-40.2 79.2-83.8V88.6c.1-43.7-35.6-77.2-79.2-77.2zm0 368.4h-293V88.6h293v291.2zm0 160.9h-293c-43.6 0-79.2 35.8-79.2 79.4v289c0 43.7 35.6 79.4 79.2 79.4h293c43.6 0 79.2-35.8 79.2-79.4v-289c.1-43.5-35.6-79.4-79.2-79.4zm0 368.5h-293V618.1h293v291.1zM910.7 11.4H620.1c-43.6 0-81.5 33.5-81.5 77.3v291.2c0 43.7 37.9 79.4 81.5 79.4h290.6c43.6 0 79.3-35.8 79.3-79.4V88.6c0-43.7-35.7-77.2-79.3-77.2zm0 368.4H620.1V88.6h290.6v291.2zm-8.8 160.9H617.8c-43.5 0-79.2 35.8-79.2 79.4v289c0 43.7 35.7 79.4 79.2 79.4h293c43.6 0 79.3-35.8 79.3-79.4v-289c-.1-43.5-44.6-79.4-88.2-79.4zm8.8 368.5H620.1v-289h290.6v289z'></path>
        </svg>
    ),
    fastIconCategory: (width = 42, height = 42, fill = null) => (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1000 1000">
            <path d="M926.8 990.3H605.9c-33.8 0-61.8-27.4-61.8-61.1V611.1c0-33.8 28.1-66.7 61.8-66.7h320.9c33.7 0 63.2 32.9 63.2 66.7v318.1c0 33.8-29.5 61.1-63.2 61.1zm-4.2-379.2H611.5v312.5h311.2V611.1zm4.2-154.8H605.9c-33.8 0-61.8-29.4-61.8-63.2V73.6c0-33.7 28.1-63.9 61.8-63.9h320.9c33.7 0 63.2 30.2 63.2 63.9v319.5c0 33.7-29.5 63.2-63.2 63.2zm-4.2-378.6H611.5v311.2h311.2V77.7zM393.4 990.3H71.1C37.4 990.3 10 963 10 929.2V611.1c0-33.8 27.4-66.7 61.1-66.7h322.3c33.7 0 61.8 32.9 61.8 66.7v318.1c0 33.8-28 61.1-61.8 61.1zm-4.9-379.2H76.7V923h311.9V611.1zm4.9-154.8H71.1c-33.8 0-61.1-29.4-61.1-63.2V73.6C10 39.8 37.4 9.7 71.1 9.7h322.3c33.7 0 61.8 30.2 61.8 63.9v319.5c0 33.7-28 63.2-61.8 63.2z"></path>
        </svg>
    ),
    messenger: (width = null, height = null, fill = 'white') => (
        <svg
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 224 226"
        >
            <defs>
                <linearGradient id="a" x1="50%" x2="50%" y1="6.76%" y2="95.6%">
                    <stop offset="0" stopColor="#00C6FF"></stop>
                    <stop offset="1" stopColor="#0068FF"></stop>
                </linearGradient>
            </defs>
            <path
                fill="url(#a)"
                d="M41.255 185.52v40.2l37.589-21.37C89.322 207.37 100.46 209 112 209c61.86 0 112-46.79 112-104.5C224 46.786 173.86 0 112 0 50.144 0 0 46.786 0 104.5c0 32.68 16.078 61.86 41.255 81.02z"
            ></path>
            <path
                fill="#fff"
                d="M100.04 75.878L39.639 139.83l54.97-30.16 28.721 30.16 60.06-63.952-54.36 29.632-28.99-29.632z"
            ></path>
        </svg>
    ),
    fastIconOrder: (width = null, height = null, fill = 'white') => (
        <svg fill={fill} width={width} height={height} xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1000 1000">
            <path d="M622.5 132.5h20.4c49.4 0 90.6 35.1 100.1 81.7h22.4c56.4 0 102.2 45.6 102.2 102.2v571.4c0 56.5-45.7 102.2-102.2 102.2H234.7c-56.4 0-102.2-45.6-102.2-102.2V316.4c0-56.5 45.7-102.2 102.2-102.2H257c9.5-46.6 50.6-81.7 100.1-81.7h20.4C377.5 64.8 432.3 10 500 10s122.5 54.8 122.5 122.5zM255 255h-20.5c-33.9 0-61.2 27.4-61.2 61.3v571.6c0 33.9 27.4 61.3 61.2 61.3h531c33.9 0 61.2-27.4 61.2-61.3V316.3c0-33.9-27.4-61.3-61.2-61.3H745v81.7H255V255zm0 163.3h122.5v122.5H255V418.3zm0 163.4h122.5v122.5H255V581.7zm0 163.3h122.5v122.5H255V745zm245-551.2c33.8 0 61.3-27.4 61.3-61.3 0-33.8-27.4-61.3-61.3-61.3-33.8 0-61.3 27.4-61.3 61.3.1 33.8 27.5 61.3 61.3 61.3zm-40.8 592H745v40.8H459.2v-40.8zm0-163.3H745v40.8H459.2v-40.8zm0-163.3H745V500H459.2v-40.8zM295.8 785.8h40.8v40.8h-40.8v-40.8zm0-163.3h40.8v40.8h-40.8v-40.8zm0-163.3h40.8V500h-40.8v-40.8z"></path>
        </svg>
    ),
};

export default Icons;
