interface AccentElementProps {
  className?: string;
  width?: string | number; // Accepts string or number for flexibility
  height?: string | number;
}

const AccentElement = ({
  className,
  width = 917,
  height = 651,
}: AccentElementProps) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 917 651"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_101_462)">
          <path
            d="M485.187 449.805C580.282 443.548 642.347 408.446 702.715 326.776C825.011 161.329 110.485 108.772 209.995 290.534C272.738 405.139 363.72 457.796 485.187 449.805Z"
            fill="white"
            fill-opacity="0.18"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_101_462"
            x="0.454948"
            y="-23.6465"
            width="916.391"
            height="674.24"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_101_462"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default AccentElement;
