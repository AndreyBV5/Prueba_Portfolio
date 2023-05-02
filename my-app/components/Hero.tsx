import React from "react";
import styles from "../styles/Home.module.css"

const Hero = () => {

    return (
        <section className={styles.hero}>
            <section id = "UI/UX">
            <h2>Andrey Portfolio</h2>
            <p className={styles.desktop}>
                If you are interested in my portfolio, do not hesitate to follow me for more information.
                <br />
                portfolio for your design needs.
            </p>
                <div className={styles.desktop}>
                    <svg
                        width={354}
                        height={364}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width={354} height={364} rx={8} fill="#755CDE" />
                        <path fill="#552049" d="M202 24h64v128h-64z" />
                        <circle cx={234} cy={56} r={14} stroke="#FFF7F0" strokeWidth={4} />
                        <rect x={266} y={56} width={64} height={32} rx={16} fill="#F6A560" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m234 184 32 32v-32h-32ZM266 152l32 32v-32h-32Z"
                            fill="#61C4B7"
                        />
                        <circle cx={314} cy={72} r={14} stroke="#FFF7F0" strokeWidth={4} />
                        <circle cx={314} cy={72} r={14} stroke="#FFF7F0" strokeWidth={4} />
                        <path
                            fill="#030303"
                            d="M266 38h4v4h-4zM270 38h4v4h-4zM294 38h4v4h-4z"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m298 24 32 32V24h-32Z"
                            fill="#755CDE"
                        />
                        <path
                            fill="#030303"
                            d="M298 38h4v4h-4zM322 38h4v4h-4zM326 38h4v4h-4z"
                        />
                        <circle cx={282} cy={104} r={14} stroke="#030303" strokeWidth={4} />
                        <path fill="#EB7565" d="M298 88h32v32h-32z" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m234 120 96 96v-96h-96Z"
                            fill="#FFF7F0"
                        />
                        <path
                            fill="#030303"
                            d="M202 152h4v4h-4zM216 152h4v4h-4zM230 152h4v4h-4zM202 166h4v4h-4zM216 166h4v4h-4zM230 166h4v4h-4zM202 180h4v4h-4zM216 180h4v4h-4zM230 180h4v4h-4z"
                        />
                        <path
                            d="M34.2 335.288a9.12 9.12 0 0 0 3.072-.528 8.242 8.242 0 0 0 2.664-1.608c.8-.72 1.432-1.6 1.896-2.64.464-1.056.696-2.28.696-3.672v-1.8h-8.4v2.76h5.136v.072c0 .912-.232 1.704-.696 2.376a4.706 4.706 0 0 1-1.848 1.536 5.975 5.975 0 0 1-2.52.528c-1.12 0-2.112-.264-2.976-.792a5.594 5.594 0 0 1-2.04-2.184c-.48-.944-.72-2.04-.72-3.288 0-1.248.24-2.336.72-3.264.48-.944 1.144-1.672 1.992-2.184.848-.528 1.832-.792 2.952-.792 1.136 0 2.104.288 2.904.864a4.832 4.832 0 0 1 1.728 2.256l2.904-1.392c-.304-.848-.808-1.624-1.512-2.328-.704-.72-1.568-1.296-2.592-1.728-1.008-.432-2.152-.648-3.432-.648-1.28 0-2.464.232-3.552.696a8.229 8.229 0 0 0-2.832 1.92c-.8.816-1.424 1.792-1.872 2.928-.448 1.12-.672 2.344-.672 3.672 0 1.328.224 2.56.672 3.696a9.12 9.12 0 0 0 1.92 2.928 8.787 8.787 0 0 0 2.856 1.944c1.088.448 2.272.672 3.552.672ZM44.847 335h3.144v-7.272c0-.992.272-1.76.816-2.304.56-.56 1.28-.84 2.16-.84h1.128V321.8h-.768c-.8 0-1.504.144-2.112.432-.608.288-1.08.808-1.416 1.56v-1.848h-2.952V335Zm12.936.288c1.696 0 3.056-.56 4.08-1.68V335h2.976v-8.688c0-.912-.232-1.72-.696-2.424-.464-.704-1.104-1.248-1.92-1.632-.8-.4-1.736-.6-2.808-.6-1.312 0-2.48.312-3.504.936-1.024.624-1.728 1.448-2.112 2.472l2.568 1.248a3.083 3.083 0 0 1 1.128-1.416c.512-.368 1.112-.552 1.8-.552.72 0 1.296.192 1.728.576.448.368.672.832.672 1.392v.432l-3.888.624c-1.536.256-2.672.744-3.408 1.464-.736.72-1.104 1.624-1.104 2.712 0 1.152.408 2.064 1.224 2.736.816.672 1.904 1.008 3.264 1.008Zm-1.224-3.864c0-.912.616-1.488 1.848-1.728l3.288-.552v.528c0 .896-.312 1.656-.936 2.28-.608.624-1.408.936-2.4.936-.528 0-.96-.128-1.296-.384-.336-.272-.504-.632-.504-1.08Zm11.186 8.376h3.144v-6.048c.48.496 1.064.88 1.752 1.152a6.35 6.35 0 0 0 2.232.384c1.264 0 2.392-.296 3.384-.888a6.641 6.641 0 0 0 2.352-2.448c.576-1.04.864-2.2.864-3.48 0-1.28-.288-2.432-.864-3.456a6.408 6.408 0 0 0-2.352-2.448c-.992-.608-2.112-.912-3.36-.912-.896 0-1.704.16-2.424.48-.72.32-1.312.768-1.776 1.344v-1.536h-2.952V339.8Zm6.768-7.392a3.569 3.569 0 0 1-1.872-.504 3.626 3.626 0 0 1-1.296-1.392c-.304-.592-.456-1.272-.456-2.04s.152-1.448.456-2.04a3.626 3.626 0 0 1 1.296-1.392 3.569 3.569 0 0 1 1.872-.504c.72 0 1.352.176 1.896.528.56.336 1 .8 1.32 1.392.32.592.48 1.264.48 2.016s-.16 1.432-.48 2.04a3.567 3.567 0 0 1-1.32 1.392c-.544.336-1.176.504-1.896.504ZM83.87 335h3.144v-7.656c0-.848.248-1.528.744-2.04s1.128-.768 1.896-.768 1.4.256 1.896.768c.496.496.744 1.176.744 2.04V335h3.144v-8.4c0-.976-.208-1.832-.624-2.568a4.396 4.396 0 0 0-1.752-1.752c-.736-.416-1.584-.624-2.544-.624-.752 0-1.432.136-2.04.408a3.312 3.312 0 0 0-1.464 1.176v-6.408H83.87V335Zm14.227-14.52h3.144v-3.36h-3.144v3.36Zm0 14.52h3.144v-13.056h-3.144V335Zm12.335.288a6.98 6.98 0 0 0 2.616-.48 6.371 6.371 0 0 0 2.064-1.368 5.362 5.362 0 0 0 1.248-1.992l-2.76-1.248c-.256.688-.664 1.232-1.224 1.632-.544.384-1.192.576-1.944.576a3.445 3.445 0 0 1-1.848-.504 3.513 3.513 0 0 1-1.248-1.392c-.304-.608-.456-1.288-.456-2.04 0-.768.152-1.448.456-2.04a3.513 3.513 0 0 1 1.248-1.392 3.445 3.445 0 0 1 1.848-.504c.752 0 1.4.2 1.944.6.56.4.968.928 1.224 1.584l2.76-1.2a5.335 5.335 0 0 0-1.272-2.016 5.897 5.897 0 0 0-2.064-1.368c-.8-.32-1.664-.48-2.592-.48-1.296 0-2.464.296-3.504.888a6.526 6.526 0 0 0-2.424 2.424c-.592 1.024-.888 2.184-.888 3.48 0 1.296.296 2.464.888 3.504a6.71 6.71 0 0 0 2.424 2.448c1.04.592 2.208.888 3.504.888Zm12.843-.288h5.832c1.888 0 3.528-.384 4.92-1.152 1.408-.768 2.496-1.824 3.264-3.168.768-1.344 1.152-2.888 1.152-4.632 0-1.76-.384-3.304-1.152-4.632-.768-1.344-1.848-2.392-3.24-3.144-1.392-.768-3.04-1.152-4.944-1.152h-5.832V335Zm3.264-2.88V320h2.64c1.216 0 2.264.248 3.144.744a5.204 5.204 0 0 1 2.088 2.112c.496.896.744 1.96.744 3.192 0 1.232-.248 2.304-.744 3.216a5.052 5.052 0 0 1-2.064 2.112c-.896.496-1.952.744-3.168.744h-2.64Zm20.43 3.168c1.328 0 2.488-.296 3.48-.888 1.008-.608 1.712-1.376 2.112-2.304l-2.544-1.248a3.511 3.511 0 0 1-1.2 1.224c-.496.304-1.104.456-1.824.456-.944 0-1.736-.288-2.376-.864-.64-.576-1.008-1.344-1.104-2.304h9.408c.064-.176.104-.376.12-.6.032-.24.048-.48.048-.72 0-1.168-.248-2.232-.744-3.192a5.75 5.75 0 0 0-2.16-2.304c-.944-.592-2.096-.888-3.456-.888-1.216 0-2.32.296-3.312.888a6.516 6.516 0 0 0-2.328 2.424c-.56 1.008-.84 2.168-.84 3.48 0 1.264.28 2.416.84 3.456a6.353 6.353 0 0 0 2.352 2.472c1.008.608 2.184.912 3.528.912Zm-.24-11.04c.832 0 1.52.256 2.064.768.56.496.872 1.144.936 1.944h-6.144c.176-.864.544-1.528 1.104-1.992.576-.48 1.256-.72 2.04-.72Zm13.711 11.04c.992 0 1.856-.168 2.592-.504.736-.336 1.312-.8 1.728-1.392.416-.608.624-1.304.624-2.088 0-.912-.288-1.696-.864-2.352-.576-.656-1.408-1.136-2.496-1.44l-2.088-.624c-.448-.128-.816-.296-1.104-.504a1.007 1.007 0 0 1-.432-.864c0-.384.152-.696.456-.936.304-.24.72-.36 1.248-.36a3.13 3.13 0 0 1 1.776.528c.544.352.92.824 1.128 1.416l2.4-1.128a4.879 4.879 0 0 0-2.016-2.472c-.944-.608-2.032-.912-3.264-.912-.944 0-1.784.168-2.52.504-.72.336-1.288.808-1.704 1.416-.4.592-.6 1.288-.6 2.088 0 .896.28 1.672.84 2.328.576.656 1.416 1.144 2.52 1.464l2.136.6c.416.112.768.28 1.056.504a.99.99 0 0 1 .456.864c0 .432-.176.776-.528 1.032-.336.24-.784.36-1.344.36-.736 0-1.4-.208-1.992-.624-.592-.416-1.064-.992-1.416-1.728l-2.352 1.128c.384 1.12 1.088 2.016 2.112 2.688 1.04.672 2.256 1.008 3.648 1.008Zm7.36-14.808h3.144v-3.36H167.8v3.36Zm0 14.52h3.144v-13.056H167.8V335Zm12.383 5.28c1.248 0 2.352-.256 3.312-.768a5.743 5.743 0 0 0 2.256-2.112c.544-.896.816-1.912.816-3.048v-12.408h-2.976v1.512c-.992-1.2-2.328-1.8-4.008-1.8-1.2 0-2.272.28-3.216.84a5.927 5.927 0 0 0-2.232 2.256c-.544.96-.816 2.056-.816 3.288 0 1.216.272 2.312.816 3.288a6.002 6.002 0 0 0 2.256 2.304c.96.56 2.048.84 3.264.84 1.584 0 2.84-.512 3.768-1.536v1.416c0 .96-.304 1.704-.912 2.232-.608.544-1.384.816-2.328.816-.832 0-1.536-.192-2.112-.576-.56-.368-.936-.856-1.128-1.464l-2.928 1.104c.416 1.152 1.176 2.072 2.28 2.76 1.12.704 2.416 1.056 3.888 1.056Zm-.144-8.712c-1.008 0-1.84-.328-2.496-.984-.64-.672-.96-1.512-.96-2.52 0-.672.144-1.272.432-1.8.304-.544.72-.968 1.248-1.272a3.495 3.495 0 0 1 1.776-.456c.992 0 1.8.336 2.424 1.008.64.656.96 1.496.96 2.52s-.32 1.864-.96 2.52c-.624.656-1.432.984-2.424.984Zm9.464 3.432h3.144v-7.656c0-.848.24-1.528.72-2.04.496-.512 1.136-.768 1.92-.768s1.416.256 1.896.768c.496.496.744 1.176.744 2.04V335h3.144v-8.4c0-.976-.208-1.832-.624-2.568a4.396 4.396 0 0 0-1.752-1.752c-.736-.416-1.584-.624-2.544-.624-.816 0-1.552.16-2.208.48-.64.32-1.136.792-1.488 1.416v-1.608h-2.952V335Z"
                            fill="#fff"
                        />
                    </svg>
                    <svg
                        width={165}
                        height={182}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#b)">
                            <rect x={0.087} width={164} height={182} rx={8} fill="#F6A560" />
                            <path
                                d="M32.471 153.288c1.376 0 2.592-.288 3.648-.864a6.439 6.439 0 0 0 2.52-2.376c.608-1.008.912-2.152.912-3.432V135.12h-3.264v11.328c0 .752-.168 1.424-.504 2.016a3.56 3.56 0 0 1-1.344 1.368c-.56.32-1.216.48-1.968.48-.736 0-1.392-.16-1.968-.48a3.74 3.74 0 0 1-1.368-1.368c-.32-.592-.48-1.264-.48-2.016V135.12h-3.264v11.496c0 1.28.304 2.424.912 3.432a6.483 6.483 0 0 0 2.496 2.376c1.072.576 2.296.864 3.672.864ZM42.81 153h3.264v-17.88H42.81V153Zm5.335.96H51.6l7.968-19.8h-3.432l-7.992 19.8Zm20.396-.672c1.377 0 2.593-.288 3.648-.864a6.439 6.439 0 0 0 2.52-2.376c.608-1.008.912-2.152.912-3.432V135.12h-3.263v11.328c0 .752-.169 1.424-.505 2.016a3.56 3.56 0 0 1-1.343 1.368c-.56.32-1.217.48-1.969.48-.736 0-1.391-.16-1.968-.48a3.74 3.74 0 0 1-1.367-1.368c-.32-.592-.48-1.264-.48-2.016V135.12h-3.264v11.496c0 1.28.303 2.424.911 3.432a6.483 6.483 0 0 0 2.497 2.376c1.072.576 2.295.864 3.671.864Zm8.875-.288h3.744l3.936-6.048L89.008 153h3.744l-5.832-9 5.784-8.88H88.96l-3.864 5.952-3.888-5.952h-3.744l5.808 8.88-5.856 9Z"
                                fill="#fff"
                            />
                            <circle cx={124} cy={40} r={14} stroke="#030303" strokeWidth={4} />
                            <path fill="#EB7565" d="M76 24h32v32H76z" />
                            <path
                                fill="#030303"
                                d="M76 56h4v4h-4zM90 56h4v4h-4zM104 56h4v4h-4zM76 70h4v4h-4zM90 70h4v4h-4zM104 70h4v4h-4zM76 84h4v4h-4zM90 84h4v4h-4zM104 84h4v4h-4z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="m108 56 32 32V56h-32Z"
                                fill="#FFF7F0"
                            />
                        </g>
                        <defs>
                            <clipPath id="b">
                                <path
                                    fill="#fff"
                                    transform="translate(.087)"
                                    d="M0 0h164v182H0z"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg
                        width={165}
                        height={182}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#c)">
                            <rect x={0.131} width={164} height={182} rx={8} fill="#F39E9E" />
                            <path
                                d="M24.163 153h3.528l1.296-3.84h6.912L37.17 153h3.552l-6.168-17.88H30.33L24.163 153Zm5.76-6.72 2.52-7.536 2.52 7.536h-5.04Zm12.526 11.52h3.144v-6.048c.48.496 1.064.88 1.752 1.152a6.35 6.35 0 0 0 2.232.384c1.264 0 2.392-.296 3.384-.888a6.641 6.641 0 0 0 2.352-2.448c.576-1.04.864-2.2.864-3.48 0-1.28-.288-2.432-.864-3.456a6.408 6.408 0 0 0-2.352-2.448c-.992-.608-2.112-.912-3.36-.912-.896 0-1.704.16-2.424.48-.72.32-1.312.768-1.776 1.344v-1.536h-2.952V157.8Zm6.768-7.392a3.569 3.569 0 0 1-1.872-.504 3.626 3.626 0 0 1-1.296-1.392c-.304-.592-.456-1.272-.456-2.04s.152-1.448.456-2.04a3.626 3.626 0 0 1 1.296-1.392 3.569 3.569 0 0 1 1.872-.504c.72 0 1.352.176 1.896.528.56.336 1 .8 1.32 1.392.32.592.48 1.264.48 2.016s-.16 1.432-.48 2.04a3.567 3.567 0 0 1-1.32 1.392c-.544.336-1.176.504-1.896.504Zm9.357 7.392h3.144v-6.048c.48.496 1.064.88 1.752 1.152a6.35 6.35 0 0 0 2.232.384c1.264 0 2.392-.296 3.384-.888a6.641 6.641 0 0 0 2.352-2.448c.576-1.04.864-2.2.864-3.48 0-1.28-.288-2.432-.864-3.456a6.408 6.408 0 0 0-2.352-2.448c-.992-.608-2.112-.912-3.36-.912-.896 0-1.704.16-2.424.48-.72.32-1.312.768-1.776 1.344v-1.536h-2.952V157.8Zm6.768-7.392a3.569 3.569 0 0 1-1.872-.504 3.626 3.626 0 0 1-1.296-1.392c-.304-.592-.456-1.272-.456-2.04s.152-1.448.456-2.04a3.626 3.626 0 0 1 1.296-1.392 3.569 3.569 0 0 1 1.872-.504c.72 0 1.352.176 1.896.528.56.336 1 .8 1.32 1.392.32.592.48 1.264.48 2.016s-.16 1.432-.48 2.04a3.567 3.567 0 0 1-1.32 1.392c-.544.336-1.176.504-1.896.504Zm14.325 2.88c.992 0 1.856-.168 2.592-.504.736-.336 1.312-.8 1.728-1.392.416-.608.624-1.304.624-2.088 0-.912-.288-1.696-.864-2.352-.576-.656-1.408-1.136-2.496-1.44l-2.088-.624c-.448-.128-.816-.296-1.104-.504a1.007 1.007 0 0 1-.432-.864c0-.384.152-.696.456-.936.304-.24.72-.36 1.248-.36a3.13 3.13 0 0 1 1.776.528c.544.352.92.824 1.128 1.416l2.4-1.128a4.879 4.879 0 0 0-2.016-2.472c-.944-.608-2.032-.912-3.264-.912-.944 0-1.784.168-2.52.504-.72.336-1.288.808-1.704 1.416-.4.592-.6 1.288-.6 2.088 0 .896.28 1.672.84 2.328.576.656 1.416 1.144 2.52 1.464l2.136.6c.416.112.768.28 1.056.504a.99.99 0 0 1 .456.864c0 .432-.176.776-.528 1.032-.336.24-.784.36-1.344.36-.736 0-1.4-.208-1.992-.624-.592-.416-1.064-.992-1.416-1.728l-2.352 1.128c.384 1.12 1.088 2.016 2.112 2.688 1.04.672 2.256 1.008 3.648 1.008Z"
                                fill="#fff"
                            />
                            <rect x={76} y={56} width={64} height={32} rx={16} fill="#552049" />
                            <circle cx={124} cy={72} r={14} stroke="#FFF7F0" strokeWidth={4} />
                            <path
                                fill="#030303"
                                d="M76 38h4v4h-4zM80 38h4v4h-4zM104 38h4v4h-4z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="m108 24 32 32V24h-32Z"
                                fill="#755CDE"
                            />
                            <path
                                fill="#030303"
                                d="M108 38h4v4h-4zM132 38h4v4h-4zM136 38h4v4h-4z"
                            />
                        </g>
                        <defs>
                            <clipPath id="c">
                                <path
                                    fill="#fff"
                                    transform="translate(.131)"
                                    d="M0 0h164v182H0z"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg
                        width={354}
                        height={182}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width={354} height={182} rx={8} fill="#61C4B7" />
                        <path fill="#EB7565" d="M202 24h64v64h-64z" />
                        <circle cx={186} cy={40} r={14} stroke="#030303" strokeWidth={4} />
                        <circle cx={234} cy={56} r={14} stroke="#FFF7F0" strokeWidth={4} />
                        <path
                            fill="#030303"
                            d="M298 56h4v4h-4zM312 56h4v4h-4zM326 56h4v4h-4zM298 80h4v4h-4zM312 80h4v4h-4zM326 80h4v4h-4zM298 84h4v4h-4zM312 84h4v4h-4zM326 84h4v4h-4zM298 24h4v4h-4zM312 24h4v4h-4zM326 24h4v4h-4zM298 28h4v4h-4zM312 28h4v4h-4zM326 28h4v4h-4zM298 52h4v4h-4zM312 52h4v4h-4zM326 52h4v4h-4z"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m266 56 32 32V56h-32Z"
                            fill="#FFF7F0"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m266 56 32 32V56h-32Z"
                            fill="#552049"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m202 88-32-32v32h32Z"
                            fill="#F39E9E"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m266 56 32-32v32h-32Z"
                            fill="#FFF7F0"
                        />
                        <path
                            d="M25.588 153h3.264v-6.6h3.408c1.216 0 2.288-.216 3.216-.648a5.152 5.152 0 0 0 2.184-1.944c.544-.848.816-1.864.816-3.048 0-1.216-.264-2.24-.792-3.072-.528-.832-1.264-1.464-2.208-1.896-.928-.448-2-.672-3.216-.672h-6.672V153Zm3.264-9.48V138h3.456c.88 0 1.584.248 2.112.744s.792 1.168.792 2.016c0 .832-.264 1.504-.792 2.016-.528.496-1.232.744-2.112.744h-3.456ZM40.886 153h3.145v-7.656c0-.848.248-1.528.744-2.04.495-.512 1.128-.768 1.895-.768.768 0 1.4.256 1.896.768.496.496.744 1.176.744 2.04V153h3.145v-8.4c0-.976-.209-1.832-.624-2.568a4.396 4.396 0 0 0-1.753-1.752c-.736-.416-1.584-.624-2.544-.624-.752 0-1.431.136-2.04.408a3.312 3.312 0 0 0-1.463 1.176v-6.408h-3.145V153Zm20.611.288c1.264 0 2.416-.288 3.456-.864A6.84 6.84 0 0 0 67.45 150c.624-1.04.936-2.216.936-3.528 0-1.312-.312-2.48-.936-3.504a6.655 6.655 0 0 0-2.472-2.424c-1.04-.592-2.2-.888-3.48-.888-1.296 0-2.464.296-3.504.888a6.84 6.84 0 0 0-2.496 2.424c-.608 1.024-.912 2.192-.912 3.504 0 1.312.304 2.48.912 3.504a6.84 6.84 0 0 0 2.496 2.424c1.056.592 2.224.888 3.504.888Zm0-2.88c-.704 0-1.336-.168-1.896-.504a3.626 3.626 0 0 1-1.296-1.392c-.304-.608-.456-1.288-.456-2.04s.152-1.424.456-2.016a3.626 3.626 0 0 1 1.296-1.392 3.488 3.488 0 0 1 1.896-.528c.704 0 1.32.176 1.848.528.544.336.968.8 1.272 1.392.32.592.48 1.264.48 2.016s-.16 1.432-.48 2.04a3.453 3.453 0 0 1-1.272 1.392c-.528.336-1.144.504-1.848.504Zm14.99 2.736c.528 0 1.048-.04 1.56-.12v-2.712a5.415 5.415 0 0 1-.84.072c-.768 0-1.328-.176-1.68-.528-.352-.352-.528-.856-.528-1.512v-5.592h3v-2.808h-3v-2.976h-3.144v1.008c0 .64-.176 1.128-.528 1.464-.352.336-.848.504-1.488.504h-.24v2.808h2.256v5.76c0 1.456.4 2.592 1.2 3.408.816.816 1.96 1.224 3.432 1.224Zm10.229.144c1.264 0 2.416-.288 3.456-.864A6.84 6.84 0 0 0 92.668 150c.624-1.04.936-2.216.936-3.528 0-1.312-.312-2.48-.936-3.504a6.655 6.655 0 0 0-2.472-2.424c-1.04-.592-2.2-.888-3.48-.888-1.296 0-2.464.296-3.504.888a6.84 6.84 0 0 0-2.496 2.424c-.608 1.024-.912 2.192-.912 3.504 0 1.312.304 2.48.912 3.504a6.84 6.84 0 0 0 2.496 2.424c1.056.592 2.224.888 3.504.888Zm0-2.88c-.704 0-1.336-.168-1.896-.504a3.626 3.626 0 0 1-1.296-1.392c-.304-.608-.456-1.288-.456-2.04s.152-1.424.456-2.016a3.626 3.626 0 0 1 1.296-1.392 3.488 3.488 0 0 1 1.896-.528c.704 0 1.32.176 1.848.528.544.336.968.8 1.272 1.392.32.592.48 1.264.48 2.016s-.16 1.432-.48 2.04a3.453 3.453 0 0 1-1.272 1.392c-.528.336-1.144.504-1.848.504Zm15.608 7.872c1.248 0 2.352-.256 3.312-.768a5.743 5.743 0 0 0 2.256-2.112c.544-.896.816-1.912.816-3.048v-12.408h-2.976v1.512c-.992-1.2-2.328-1.8-4.008-1.8-1.2 0-2.272.28-3.216.84a5.927 5.927 0 0 0-2.232 2.256c-.544.96-.816 2.056-.816 3.288 0 1.216.272 2.312.816 3.288a6.002 6.002 0 0 0 2.256 2.304c.96.56 2.048.84 3.264.84 1.584 0 2.84-.512 3.768-1.536v1.416c0 .96-.304 1.704-.912 2.232-.608.544-1.384.816-2.328.816-.832 0-1.536-.192-2.112-.576-.56-.368-.936-.856-1.128-1.464l-2.928 1.104c.416 1.152 1.176 2.072 2.28 2.76 1.12.704 2.416 1.056 3.888 1.056Zm-.144-8.712c-1.008 0-1.84-.328-2.496-.984-.64-.672-.96-1.512-.96-2.52 0-.672.144-1.272.432-1.8a3.29 3.29 0 0 1 1.248-1.272 3.495 3.495 0 0 1 1.776-.456c.992 0 1.8.336 2.424 1.008.64.656.96 1.496.96 2.52s-.32 1.864-.96 2.52c-.624.656-1.432.984-2.424.984Zm9.464 3.432h3.144v-7.272c0-.992.272-1.76.816-2.304.56-.56 1.28-.84 2.16-.84h1.128V139.8h-.768c-.8 0-1.504.144-2.112.432-.608.288-1.08.808-1.416 1.56v-1.848h-2.952V153Zm12.937.288c1.696 0 3.056-.56 4.08-1.68V153h2.976v-8.688c0-.912-.232-1.72-.696-2.424-.464-.704-1.104-1.248-1.92-1.632-.8-.4-1.736-.6-2.808-.6-1.312 0-2.48.312-3.504.936-1.024.624-1.728 1.448-2.112 2.472l2.568 1.248a3.083 3.083 0 0 1 1.128-1.416c.512-.368 1.112-.552 1.8-.552.72 0 1.296.192 1.728.576.448.368.672.832.672 1.392v.432l-3.888.624c-1.536.256-2.672.744-3.408 1.464-.736.72-1.104 1.624-1.104 2.712 0 1.152.408 2.064 1.224 2.736.816.672 1.904 1.008 3.264 1.008Zm-1.224-3.864c0-.912.616-1.488 1.848-1.728l3.288-.552v.528c0 .896-.312 1.656-.936 2.28-.608.624-1.408.936-2.4.936-.528 0-.96-.128-1.296-.384-.336-.272-.504-.632-.504-1.08Zm11.186 8.376h3.144v-6.048c.48.496 1.064.88 1.752 1.152a6.35 6.35 0 0 0 2.232.384c1.264 0 2.392-.296 3.384-.888a6.641 6.641 0 0 0 2.352-2.448c.576-1.04.864-2.2.864-3.48 0-1.28-.288-2.432-.864-3.456a6.408 6.408 0 0 0-2.352-2.448c-.992-.608-2.112-.912-3.36-.912-.896 0-1.704.16-2.424.48-.72.32-1.312.768-1.776 1.344v-1.536h-2.952V157.8Zm6.768-7.392a3.569 3.569 0 0 1-1.872-.504 3.626 3.626 0 0 1-1.296-1.392c-.304-.592-.456-1.272-.456-2.04s.152-1.448.456-2.04a3.626 3.626 0 0 1 1.296-1.392 3.569 3.569 0 0 1 1.872-.504c.72 0 1.352.176 1.896.528.56.336 1 .8 1.32 1.392.32.592.48 1.264.48 2.016s-.16 1.432-.48 2.04a3.567 3.567 0 0 1-1.32 1.392c-.544.336-1.176.504-1.896.504Zm9.357 2.592h3.144v-7.656c0-.848.248-1.528.744-2.04s1.128-.768 1.896-.768 1.4.256 1.896.768c.496.496.744 1.176.744 2.04V153h3.144v-8.4c0-.976-.208-1.832-.624-2.568a4.396 4.396 0 0 0-1.752-1.752c-.736-.416-1.584-.624-2.544-.624-.752 0-1.432.136-2.04.408a3.312 3.312 0 0 0-1.464 1.176v-6.408h-3.144V153Zm15.576 5.304c1.232 0 2.256-.352 3.072-1.056.832-.688 1.496-1.664 1.992-2.928l5.688-14.376h-3.408l-3.36 9-3.384-9h-3.384L168.62 153l-.288.696c-.256.544-.552.984-.888 1.32-.32.336-.84.504-1.56.504-.256 0-.528-.024-.816-.072a4.7 4.7 0 0 1-.768-.144v2.64c.272.128.576.216.912.264.336.064.68.096 1.032.096Z"
                            fill="#fff"
                        />
                    </svg>
                    <svg
                        width={355}
                        height={158}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#a)">
                            <rect x={0.087} width={354} height={158} rx={8} fill="#EB7565" />
                            <circle cx={313} cy={40} r={14} stroke="#FFF7F0" strokeWidth={4} />
                            <path fill="#755CDE" d="M265 24h32v32h-32z" />
                            <path
                                fill="#030303"
                                d="M297 56h4v4h-4zM311 56h4v4h-4zM325 56h4v4h-4zM297 70h4v4h-4zM311 70h4v4h-4zM325 70h4v4h-4zM297 84h4v4h-4zM311 84h4v4h-4zM325 84h4v4h-4z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="m265 56 32 32V56h-32Z"
                                fill="#F39E9E"
                            />
                            <path
                                fill="#030303"
                                d="M233 56h4v4h-4zM247 56h4v4h-4zM261 56h4v4h-4zM233 80h4v4h-4zM247 80h4v4h-4zM261 80h4v4h-4zM233 84h4v4h-4zM247 84h4v4h-4zM261 84h4v4h-4zM233 24h4v4h-4zM247 24h4v4h-4zM261 24h4v4h-4zM233 28h4v4h-4zM247 28h4v4h-4zM261 28h4v4h-4zM233 52h4v4h-4zM247 52h4v4h-4zM261 52h4v4h-4z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="m201 56 32 32V56h-32Z"
                                fill="#61C4B7"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="m233 24-32 32V24h32Z"
                                fill="#FFF7F0"
                            />
                            <path
                                d="M25.815 129h3.264v-17.88h-3.264V129Zm6.44 0h3.143v-18.168h-3.144V129Zm6.046 0h3.144v-18.168h-3.144V129Zm10.703.288c.816 0 1.536-.152 2.16-.456a3.629 3.629 0 0 0 1.512-1.392V129h2.976v-13.056h-3.144v7.656c0 .864-.248 1.552-.744 2.064-.496.496-1.128.744-1.896.744-.784 0-1.424-.248-1.92-.744-.48-.496-.72-1.16-.72-1.992v-7.728h-3.144v7.992c0 1.6.432 2.896 1.296 3.888.88.976 2.088 1.464 3.624 1.464Zm14.539 0c.992 0 1.856-.168 2.592-.504.736-.336 1.312-.8 1.728-1.392.416-.608.624-1.304.624-2.088 0-.912-.288-1.696-.864-2.352-.576-.656-1.408-1.136-2.496-1.44l-2.088-.624c-.448-.128-.816-.296-1.104-.504a1.007 1.007 0 0 1-.432-.864c0-.384.152-.696.456-.936.304-.24.72-.36 1.248-.36a3.13 3.13 0 0 1 1.776.528c.544.352.92.824 1.128 1.416l2.4-1.128a4.879 4.879 0 0 0-2.016-2.472c-.944-.608-2.032-.912-3.264-.912-.944 0-1.784.168-2.52.504-.72.336-1.288.808-1.704 1.416-.4.592-.6 1.288-.6 2.088 0 .896.28 1.672.84 2.328.576.656 1.416 1.144 2.52 1.464l2.136.6c.416.112.768.28 1.056.504a.99.99 0 0 1 .456.864c0 .432-.176.776-.528 1.032-.336.24-.784.36-1.344.36-.736 0-1.4-.208-1.992-.624-.592-.416-1.064-.992-1.416-1.728l-2.352 1.128c.384 1.12 1.088 2.016 2.112 2.688 1.04.672 2.256 1.008 3.648 1.008Zm13.312-.144c.528 0 1.048-.04 1.56-.12v-2.712a5.415 5.415 0 0 1-.84.072c-.768 0-1.328-.176-1.68-.528-.352-.352-.528-.856-.528-1.512v-5.592h3v-2.808h-3v-2.976h-3.144v1.008c0 .64-.176 1.128-.528 1.464-.352.336-.848.504-1.488.504h-.24v2.808h2.256v5.76c0 1.456.4 2.592 1.2 3.408.816.816 1.96 1.224 3.432 1.224Zm3.962-.144h3.144v-7.272c0-.992.272-1.76.816-2.304.56-.56 1.28-.84 2.16-.84h1.128V115.8h-.768c-.8 0-1.504.144-2.112.432-.608.288-1.08.808-1.416 1.56v-1.848h-2.952V129Zm12.937.288c1.696 0 3.056-.56 4.08-1.68V129h2.976v-8.688c0-.912-.232-1.72-.696-2.424-.464-.704-1.104-1.248-1.92-1.632-.8-.4-1.736-.6-2.808-.6-1.312 0-2.48.312-3.504.936-1.024.624-1.728 1.448-2.112 2.472l2.568 1.248a3.083 3.083 0 0 1 1.128-1.416c.512-.368 1.112-.552 1.8-.552.72 0 1.296.192 1.728.576.448.368.672.832.672 1.392v.432l-3.888.624c-1.536.256-2.672.744-3.408 1.464-.736.72-1.104 1.624-1.104 2.712 0 1.152.408 2.064 1.224 2.736.816.672 1.904 1.008 3.264 1.008Zm-1.224-3.864c0-.912.616-1.488 1.848-1.728l3.288-.552v.528c0 .896-.312 1.656-.936 2.28-.608.624-1.408.936-2.4.936-.528 0-.96-.128-1.296-.384-.336-.272-.504-.632-.504-1.08Zm16.903 3.72c.528 0 1.048-.04 1.56-.12v-2.712a5.415 5.415 0 0 1-.84.072c-.768 0-1.328-.176-1.68-.528-.352-.352-.528-.856-.528-1.512v-5.592h3v-2.808h-3v-2.976h-3.144v1.008c0 .64-.176 1.128-.528 1.464-.352.336-.848.504-1.488.504h-.24v2.808h2.256v5.76c0 1.456.4 2.592 1.2 3.408.816.816 1.96 1.224 3.432 1.224Zm3.962-14.664h3.144v-3.36h-3.144v3.36Zm0 14.52h3.144v-13.056h-3.144V129Zm12.431.288c1.264 0 2.416-.288 3.456-.864a6.84 6.84 0 0 0 2.496-2.424c.624-1.04.936-2.216.936-3.528 0-1.312-.312-2.48-.936-3.504a6.655 6.655 0 0 0-2.472-2.424c-1.04-.592-2.2-.888-3.48-.888-1.296 0-2.464.296-3.504.888a6.84 6.84 0 0 0-2.496 2.424c-.608 1.024-.912 2.192-.912 3.504 0 1.312.304 2.48.912 3.504a6.84 6.84 0 0 0 2.496 2.424c1.056.592 2.224.888 3.504.888Zm0-2.88c-.704 0-1.336-.168-1.896-.504a3.626 3.626 0 0 1-1.296-1.392c-.304-.608-.456-1.288-.456-2.04s.152-1.424.456-2.016a3.626 3.626 0 0 1 1.296-1.392 3.488 3.488 0 0 1 1.896-.528c.704 0 1.32.176 1.848.528.544.336.968.8 1.272 1.392.32.592.48 1.264.48 2.016s-.16 1.432-.48 2.04a3.453 3.453 0 0 1-1.272 1.392c-.528.336-1.144.504-1.848.504Zm9.272 2.592h3.144v-7.656c0-.848.24-1.528.72-2.04.496-.512 1.136-.768 1.92-.768s1.416.256 1.896.768c.496.496.744 1.176.744 2.04V129h3.144v-8.4c0-.976-.208-1.832-.624-2.568a4.396 4.396 0 0 0-1.752-1.752c-.736-.416-1.584-.624-2.544-.624-.816 0-1.552.16-2.208.48-.64.32-1.136.792-1.488 1.416v-1.608h-2.952V129Zm19.195.288c.992 0 1.856-.168 2.592-.504.736-.336 1.312-.8 1.728-1.392.416-.608.624-1.304.624-2.088 0-.912-.288-1.696-.864-2.352-.576-.656-1.408-1.136-2.496-1.44l-2.088-.624c-.448-.128-.816-.296-1.104-.504a1.007 1.007 0 0 1-.432-.864c0-.384.152-.696.456-.936.304-.24.72-.36 1.248-.36a3.13 3.13 0 0 1 1.776.528c.544.352.92.824 1.128 1.416l2.4-1.128a4.879 4.879 0 0 0-2.016-2.472c-.944-.608-2.032-.912-3.264-.912-.944 0-1.784.168-2.52.504-.72.336-1.288.808-1.704 1.416-.4.592-.6 1.288-.6 2.088 0 .896.28 1.672.84 2.328.576.656 1.416 1.144 2.52 1.464l2.136.6c.416.112.768.28 1.056.504a.99.99 0 0 1 .456.864c0 .432-.176.776-.528 1.032-.336.24-.784.36-1.344.36-.736 0-1.4-.208-1.992-.624-.592-.416-1.064-.992-1.416-1.728l-2.352 1.128c.384 1.12 1.088 2.016 2.112 2.688 1.04.672 2.256 1.008 3.648 1.008Z"
                                fill="#fff"
                            />
                        </g>
                        <defs>
                            <clipPath id="a">
                                <path
                                    fill="#fff"
                                    transform="translate(.087)"
                                    d="M0 0h354v158H0z"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg
                        width={354}
                        height={158}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width={354} height={158} rx={8} fill="#552049" />
                        <circle cx={282} cy={40} r={14} stroke="#F39E9E" strokeWidth={4} />
                        <circle
                            cx={250}
                            cy={40}
                            r={14}
                            stroke="#F39E9E"
                            strokeOpacity={0.5}
                            strokeWidth={4}
                        />
                        <circle
                            cx={218}
                            cy={40}
                            r={14}
                            stroke="#F39E9E"
                            strokeOpacity={0.25}
                            strokeWidth={4}
                        />
                        <circle cx={314} cy={40} r={14} stroke="#FFF7F0" strokeWidth={4} />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m330 88-32-32v32h32Z"
                            fill="#F39E9E"
                        />
                        <rect x={234} y={56} width={64} height={32} rx={16} fill="#F6A560" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M206 70h-4v4h8v-4h-4Zm24 0h8v4h-8v-4Zm28 0h8v4h-8v-4Z"
                            fill="#FFF7F0"
                        />
                        <path
                            d="M25.728 129h3.264v-12.384l5.544 7.584h.384l5.52-7.344V129h3.288v-17.88h-3.12l-5.808 8.064-5.952-8.064h-3.12V129Zm27.542.288c1.264 0 2.416-.288 3.456-.864A6.84 6.84 0 0 0 59.222 126c.624-1.04.936-2.216.936-3.528 0-1.312-.312-2.48-.936-3.504a6.655 6.655 0 0 0-2.472-2.424c-1.04-.592-2.2-.888-3.48-.888-1.296 0-2.464.296-3.504.888a6.84 6.84 0 0 0-2.496 2.424c-.608 1.024-.912 2.192-.912 3.504 0 1.312.304 2.48.912 3.504a6.84 6.84 0 0 0 2.496 2.424c1.056.592 2.224.888 3.504.888Zm0-2.88c-.704 0-1.336-.168-1.896-.504a3.626 3.626 0 0 1-1.296-1.392c-.304-.608-.456-1.288-.456-2.04s.152-1.424.456-2.016a3.626 3.626 0 0 1 1.296-1.392 3.488 3.488 0 0 1 1.896-.528c.704 0 1.32.176 1.848.528.544.336.968.8 1.272 1.392.32.592.48 1.264.48 2.016s-.16 1.432-.48 2.04a3.453 3.453 0 0 1-1.272 1.392c-.528.336-1.144.504-1.848.504Zm14.99 2.736c.528 0 1.048-.04 1.56-.12v-2.712a5.415 5.415 0 0 1-.84.072c-.768 0-1.328-.176-1.68-.528-.352-.352-.528-.856-.528-1.512v-5.592h3v-2.808h-3v-2.976h-3.144v1.008c0 .64-.176 1.128-.528 1.464-.352.336-.848.504-1.488.504h-.24v2.808h2.256v5.76c0 1.456.4 2.592 1.2 3.408.816.816 1.96 1.224 3.432 1.224Zm3.962-14.664h3.144v-3.36h-3.144v3.36Zm0 14.52h3.144v-13.056h-3.144V129Zm12.43.288c1.265 0 2.417-.288 3.457-.864A6.84 6.84 0 0 0 90.605 126c.624-1.04.936-2.216.936-3.528 0-1.312-.312-2.48-.936-3.504a6.655 6.655 0 0 0-2.472-2.424c-1.04-.592-2.2-.888-3.48-.888-1.296 0-2.464.296-3.504.888a6.84 6.84 0 0 0-2.496 2.424c-.608 1.024-.912 2.192-.912 3.504 0 1.312.304 2.48.912 3.504a6.84 6.84 0 0 0 2.496 2.424c1.056.592 2.224.888 3.504.888Zm0-2.88c-.703 0-1.335-.168-1.895-.504a3.626 3.626 0 0 1-1.296-1.392c-.304-.608-.456-1.288-.456-2.04s.152-1.424.456-2.016a3.626 3.626 0 0 1 1.296-1.392 3.488 3.488 0 0 1 1.896-.528c.704 0 1.32.176 1.848.528.544.336.968.8 1.272 1.392.32.592.48 1.264.48 2.016s-.16 1.432-.48 2.04a3.453 3.453 0 0 1-1.272 1.392c-.528.336-1.144.504-1.848.504ZM93.926 129h3.144v-7.656c0-.848.24-1.528.72-2.04.496-.512 1.136-.768 1.92-.768s1.416.256 1.896.768c.496.496.744 1.176.744 2.04V129h3.144v-8.4c0-.976-.208-1.832-.624-2.568a4.396 4.396 0 0 0-1.752-1.752c-.736-.416-1.584-.624-2.544-.624-.816 0-1.552.16-2.208.48-.64.32-1.136.792-1.488 1.416v-1.608h-2.952V129Zm27.228.288a9.12 9.12 0 0 0 3.072-.528 8.242 8.242 0 0 0 2.664-1.608c.8-.72 1.432-1.6 1.896-2.64.464-1.056.696-2.28.696-3.672v-1.8h-8.4v2.76h5.136v.072c0 .912-.232 1.704-.696 2.376a4.706 4.706 0 0 1-1.848 1.536 5.975 5.975 0 0 1-2.52.528c-1.12 0-2.112-.264-2.976-.792a5.594 5.594 0 0 1-2.04-2.184c-.48-.944-.72-2.04-.72-3.288 0-1.248.24-2.336.72-3.264.48-.944 1.144-1.672 1.992-2.184.848-.528 1.832-.792 2.952-.792 1.136 0 2.104.288 2.904.864a4.832 4.832 0 0 1 1.728 2.256l2.904-1.392c-.304-.848-.808-1.624-1.512-2.328-.704-.72-1.568-1.296-2.592-1.728-1.008-.432-2.152-.648-3.432-.648-1.28 0-2.464.232-3.552.696a8.229 8.229 0 0 0-2.832 1.92c-.8.816-1.424 1.792-1.872 2.928-.448 1.12-.672 2.344-.672 3.672 0 1.328.224 2.56.672 3.696a9.12 9.12 0 0 0 1.92 2.928 8.787 8.787 0 0 0 2.856 1.944c1.088.448 2.272.672 3.552.672ZM131.8 129h3.144v-7.272c0-.992.272-1.76.816-2.304.56-.56 1.28-.84 2.16-.84h1.128V115.8h-.768c-.8 0-1.504.144-2.112.432-.608.288-1.08.808-1.416 1.56v-1.848H131.8V129Zm12.937.288c1.696 0 3.056-.56 4.08-1.68V129h2.976v-8.688c0-.912-.232-1.72-.696-2.424-.464-.704-1.104-1.248-1.92-1.632-.8-.4-1.736-.6-2.809-.6-1.311 0-2.479.312-3.503.936-1.024.624-1.728 1.448-2.112 2.472l2.568 1.248a3.083 3.083 0 0 1 1.128-1.416c.512-.368 1.112-.552 1.8-.552.72 0 1.296.192 1.728.576.448.368.672.832.672 1.392v.432l-3.888.624c-1.536.256-2.672.744-3.408 1.464-.736.72-1.104 1.624-1.104 2.712 0 1.152.408 2.064 1.224 2.736.816.672 1.904 1.008 3.264 1.008Zm-1.224-3.864c0-.912.616-1.488 1.848-1.728l3.288-.552v.528c0 .896-.312 1.656-.936 2.28-.608.624-1.408.936-2.401.936-.527 0-.959-.128-1.295-.384-.336-.272-.504-.632-.504-1.08Zm11.185 8.376h3.144v-6.048c.48.496 1.064.88 1.752 1.152a6.35 6.35 0 0 0 2.232.384c1.264 0 2.392-.296 3.384-.888a6.641 6.641 0 0 0 2.352-2.448c.576-1.04.864-2.2.864-3.48 0-1.28-.288-2.432-.864-3.456a6.408 6.408 0 0 0-2.352-2.448c-.992-.608-2.112-.912-3.36-.912-.896 0-1.704.16-2.424.48-.72.32-1.312.768-1.776 1.344v-1.536h-2.952V133.8Zm6.768-7.392a3.569 3.569 0 0 1-1.872-.504 3.626 3.626 0 0 1-1.296-1.392c-.304-.592-.456-1.272-.456-2.04s.152-1.448.456-2.04a3.626 3.626 0 0 1 1.296-1.392 3.569 3.569 0 0 1 1.872-.504c.72 0 1.352.176 1.896.528.56.336 1 .8 1.32 1.392.32.592.48 1.264.48 2.016s-.16 1.432-.48 2.04a3.567 3.567 0 0 1-1.32 1.392c-.544.336-1.176.504-1.896.504Zm9.357 2.592h3.144v-7.656c0-.848.248-1.528.744-2.04s1.128-.768 1.896-.768 1.4.256 1.896.768c.496.496.744 1.176.744 2.04V129h3.144v-8.4c0-.976-.208-1.832-.624-2.568a4.396 4.396 0 0 0-1.752-1.752c-.736-.416-1.584-.624-2.544-.624-.752 0-1.432.136-2.04.408a3.312 3.312 0 0 0-1.464 1.176v-6.408h-3.144V129Zm14.227-14.52h3.144v-3.36h-3.144v3.36Zm0 14.52h3.144v-13.056h-3.144V129Zm12.335.288a6.98 6.98 0 0 0 2.616-.48 6.371 6.371 0 0 0 2.064-1.368 5.362 5.362 0 0 0 1.248-1.992l-2.76-1.248c-.256.688-.664 1.232-1.224 1.632-.544.384-1.192.576-1.944.576a3.445 3.445 0 0 1-1.848-.504 3.513 3.513 0 0 1-1.248-1.392c-.304-.608-.456-1.288-.456-2.04 0-.768.152-1.448.456-2.04a3.513 3.513 0 0 1 1.248-1.392 3.445 3.445 0 0 1 1.848-.504c.752 0 1.4.2 1.944.6.56.4.968.928 1.224 1.584l2.76-1.2a5.335 5.335 0 0 0-1.272-2.016 5.897 5.897 0 0 0-2.064-1.368c-.8-.32-1.664-.48-2.592-.48-1.296 0-2.464.296-3.504.888a6.526 6.526 0 0 0-2.424 2.424c-.592 1.024-.888 2.184-.888 3.48 0 1.296.296 2.464.888 3.504a6.71 6.71 0 0 0 2.424 2.448c1.04.592 2.208.888 3.504.888Zm13.281 0c.992 0 1.856-.168 2.592-.504.736-.336 1.312-.8 1.728-1.392.416-.608.624-1.304.624-2.088 0-.912-.288-1.696-.864-2.352-.576-.656-1.408-1.136-2.496-1.44l-2.088-.624c-.448-.128-.816-.296-1.104-.504a1.007 1.007 0 0 1-.432-.864c0-.384.152-.696.456-.936.304-.24.72-.36 1.248-.36a3.13 3.13 0 0 1 1.776.528c.544.352.92.824 1.128 1.416l2.4-1.128a4.879 4.879 0 0 0-2.016-2.472c-.944-.608-2.032-.912-3.264-.912-.944 0-1.784.168-2.52.504-.72.336-1.288.808-1.704 1.416-.4.592-.6 1.288-.6 2.088 0 .896.28 1.672.84 2.328.576.656 1.416 1.144 2.52 1.464l2.136.6c.416.112.768.28 1.056.504a.99.99 0 0 1 .456.864c0 .432-.176.776-.528 1.032-.336.24-.784.36-1.344.36-.736 0-1.4-.208-1.992-.624-.592-.416-1.064-.992-1.416-1.728l-2.352 1.128c.384 1.12 1.088 2.016 2.112 2.688 1.04.672 2.256 1.008 3.648 1.008Z"
                            fill="#fff"
                        />
                    </svg>
                </div>
                </section>
        </section>
    );
};
export default Hero;