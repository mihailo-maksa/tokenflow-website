type FaviconProps = {
  style?: React.CSSProperties;
};

export const Favicon: React.FC<FaviconProps> = ({ style }): JSX.Element => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="145.000000pt"
      height="155.000000pt"
      viewBox="0 0 145.000000 155.000000"
      preserveAspectRatio="xMidYMid meet"
      style={{
        ...style,
      }}
    >
      <g
        transform="translate(0.000000,155.000000) scale(0.100000,-0.100000)"
        fill="#0066ff"
        stroke="none"
      >
        <path
          d="M625 1350 c-139 -20 -265 -84 -328 -166 -68 -88 -97 -243 -61 -319
17 -37 66 -65 113 -65 29 0 30 2 21 26 -14 37 -12 140 4 201 33 125 102 179
249 197 52 7 57 6 57 -12 0 -15 -182 -875 -215 -1020 l-6 -23 113 3 113 3 67
315 c37 173 87 402 110 508 l42 194 35 -6 c172 -25 239 -29 283 -17 56 16 102
62 117 116 16 60 15 68 -11 61 -92 -25 -172 -27 -343 -7 -177 21 -271 24 -360
11z"
        />
      </g>
    </svg>
  );
};

Favicon.defaultProps = {};
