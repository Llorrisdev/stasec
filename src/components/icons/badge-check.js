const BadgeCheck = ({width, height, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 41"
      fill="none"
    >
      <path
        d="M6.41796 14.8672C6.1747 13.7714 6.21205 12.6319 6.52656 11.5544C6.84107 10.4769 7.42254 9.49623 8.21708 8.70336C9.01161 7.91048 9.99348 7.33106 11.0716 7.01881C12.1498 6.70656 13.2894 6.6716 14.3846 6.91715C14.9875 5.97432 15.818 5.19842 16.7995 4.66096C17.7811 4.12351 18.8822 3.8418 20.0013 3.8418C21.1204 3.8418 22.2215 4.12351 23.203 4.66096C24.1846 5.19842 25.0151 5.97432 25.618 6.91715C26.7149 6.67053 27.8564 6.70534 28.9363 7.01834C30.0162 7.33135 30.9994 7.91239 31.7944 8.70741C32.5894 9.50243 33.1704 10.4856 33.4834 11.5655C33.7964 12.6454 33.8313 13.7869 33.5846 14.8838C34.5275 15.4867 35.3034 16.3172 35.8408 17.2987C36.3783 18.2803 36.66 19.3814 36.66 20.5005C36.66 21.6196 36.3783 22.7207 35.8408 23.7022C35.3034 24.6838 34.5275 25.5143 33.5846 26.1172C33.8302 27.2124 33.7952 28.352 33.483 29.4301C33.1707 30.5083 32.5913 31.4902 31.7984 32.2847C31.0056 33.0792 30.0249 33.6607 28.9474 33.9752C27.8699 34.2897 26.7304 34.3271 25.6346 34.0838C25.0326 35.0303 24.2014 35.8095 23.2182 36.3494C22.2349 36.8892 21.1313 37.1722 20.0096 37.1722C18.8879 37.1722 17.7843 36.8892 16.8011 36.3494C15.8178 35.8095 14.9867 35.0303 14.3846 34.0838C13.2894 34.3294 12.1498 34.2944 11.0716 33.9822C9.99348 33.6699 9.01161 33.0905 8.21708 32.2976C7.42254 31.5047 6.84107 30.5241 6.52656 29.4466C6.21205 28.3691 6.1747 27.2296 6.41796 26.1338C5.46789 25.5326 4.68532 24.7008 4.14305 23.7158C3.60077 22.7309 3.31641 21.6248 3.31641 20.5005C3.31641 19.3761 3.60077 18.2701 4.14305 17.2851C4.68532 16.3002 5.46789 15.4684 6.41796 14.8672Z"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.001 20.5013L18.3343 23.8346L25.001 17.168"
        stroke={color}
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BadgeCheck;
