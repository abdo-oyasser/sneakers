import { useEffect, useState } from "react";

function Home() {
    let plus = './images/icon-plus.svg'
    let minus = './images/icon-minus.svg'
    let rightArr = "./images/icon-next.svg"
    let leftArr = "./images/icon-previous.svg"

    let [imgNum, setImgNum] = useState(1)
    let [counter, setCounter] = useState(0)
    function imagesSec() {
        let imgs = []
        for (let i = 0; i < 4; i++) {
            imgs.push([<div key={i + 1} className={`sec-img-con img${i + 1}`} onClick={(ev) => {
                document.querySelectorAll(".sec-img-con").forEach((obj) => {
                    obj.classList.remove("active-img")
                })
                document.querySelectorAll(`.img${i + 1}`).forEach((e) => {
                    e.classList.add("active-img")
                })
                setImgNum(i + 1);
            }}><img src={require(`./images/image-product-${i + 1}-thumbnail.jpg`)} className="sec-img" alt="sec" /> <div className="overlay"></div></div>])
        }
        return imgs
    }
    useEffect(() => {
        if (document.querySelector(".main-img")) {
            if ((document.querySelector(".main-img").classList[1]).match(/(\d+)/)[0] === "4") {
                document.querySelector(".right-arr").style.display = "none"
            } else {
                document.querySelector(".right-arr").style.display = "flex"
            }
            if ((document.querySelector(".main-img").classList[1]).match(/(\d+)/)[0] === "1") {
                document.querySelector(".left-arr").style.display = "none"
            } else {
                document.querySelector(".left-arr").style.display = "flex"
            }
        }
    }, [imgNum])
    useEffect(() => {
        if (window.matchMedia("max-width:992px").matches) {
            if (document.querySelector(".main-img")) {
                if ((document.querySelector(".main-img").classList[1]).match(/(\d+)/)[0] === "4") {
                    document.querySelector(".right-arr-home").style.display = "none"
                } else {
                    document.querySelector(".right-arr-home").style.display = "flex"
                }
                if ((document.querySelector(".main-img").classList[1]).match(/(\d+)/)[0] === "1") {
                    document.querySelector(".left-arr-home").style.display = "none"
                } else {
                    document.querySelector(".left-arr-home").style.display = "flex"
                }
            }
        }
    }, [imgNum])
    function checkClassRight(str) {
        let matches = str.match(/(\d+)/);
        if (matches[0] !== "4") {
            document.querySelector(`.img${+matches[0] + 1}`).click()
        }
    }
    function checkClassLeft(str) {
        let matches = str.match(/(\d+)/);
        if (matches[0] !== "1") {
            document.querySelector(`.img${+matches[0] - 1}`).click()
        }
    }
    return (
        <>
            <div className="home">
                <div className="home-imgs">
                    <div className={`main-img main-img${imgNum} main-img-home`} onClick={() => {
                        if (window.matchMedia("(min-width:992px)").matches) {
                            document.querySelector(".light-box").style.display = "block"
                        }
                    }}> <img src={require(`./images/image-product-${imgNum}.jpg`)} alt="main" /></div>
                    <div className="sec-imgs">
                        {imagesSec()}
                    </div>
                    <div className="right-arr-home home-arr" onClick={() => {
                        checkClassRight(document.querySelector(".main-img").classList[1])
                    }}><img src={require(`${rightArr}`)} alt="arrow" /></div>
                    <div className="left-arr-home home-arr" onClick={() => {
                        checkClassLeft(document.querySelector(".main-img").classList[1])
                    }}><img src={require(`${leftArr}`)} alt="arrow" /></div>
                </div>
                <div className="home-text">
                    <h5>Sneaker Company</h5>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p>These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                    <div className="price">
                        <div className="current-price">
                            <div className="pr">$125.00</div>
                            <div className="discount">50%</div>
                        </div>
                        <div className="old-price">$250.00</div>
                    </div>
                    <div className="shopping">
                        <div className="shop-count">
                            <img src={require(`${minus}`)} onClick={() => {
                                if (counter !== 0) {
                                    setCounter(counter - 1)
                                }
                            }} alt="minus" />
                            <div className="counter">{counter}</div>
                            <img src={require(`${plus}`)} onClick={() => {
                                setCounter(counter + 1)
                            }} alt="plus" />
                        </div>
                        <div className="add">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <div className="add-text">Add to cart</div>
                        </div>
                    </div>
                </div>
                <div className="light-box">
                    <div className="layout"></div>
                    <div className="light-imgs">
                        <div className="main-img light-main"> <img src={require(`./images/image-product-${imgNum}.jpg`)} alt="main" /></div>
                        <div className="sec-imgs light-sec">
                            {imagesSec()}
                        </div>
                        <div className="right-arr arr" onClick={() => {
                            checkClassRight(document.querySelector(".main-img").classList[1])
                        }}><img src={require(`${rightArr}`)} alt="arrow" /></div>
                        <div className="left-arr arr" onClick={() => {
                            checkClassLeft(document.querySelector(".main-img").classList[1])
                        }}><img src={require(`${leftArr}`)} alt="arrow" /></div>
                        <div className="close-light" onClick={() => {
                            document.querySelector(".light-box").style.display = "none"
                        }}><i class="fa-solid fa-xmark"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;