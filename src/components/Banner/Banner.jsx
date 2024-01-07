import Container from "../Container/Container";

import bannerImg from '../../assets/banner.png'
import leafImg from '../../assets/leaf.png'


const Banner = () => {
  return (
    <section className="mt-20">
      <Container>

    <div className="flex flex-col md:flex-row gap-5 justify-center items-center ">

        {/* texts */}
        <div className="relative">
  <h1 className="font-playFairDisplay font-primary font-black text-4xl md:text-6xl">Welcome to EcoLife</h1>

  <img className="absolute xs:right-10 md:right-0 lg:right-12 xl:-right-10 -top-12 -translate-y-2" src={leafImg} alt="leaf-image" />

  <p className="font-primary text-2xl md:text-3xl lg:text-4xl mt-8">Your Journey to a</p>
  <p className="font-secondary text-2xl md:text-3xl lg:text-4xl mt-2">Sustainable Lifestyle</p>
  <p className="font-primary text-2xl md:text-3xl lg:text-4xl mt-2">Starts Here.</p>
  <p className="font-primary mt-10">
    Browse our curated selection of eco-friendly
    <br />
    products and make every purchase count
  </p>
  <button className="uppercase mt-8 lg:mt-12 bg-[#2BAE7A] px-4 py-2 text-white lg:px-10 lg:py-4 rounded-lg hover:bg-[#D2B48C] transition-colors delay-500 ease-in-out">Shop Now</button>

  <div className="absolute hidden md:flex lg:bottom-8 -translate-y-4 md:bottom-5  md:right-32 lg:right-40 xl:left-40 xl:bottom-9">
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 89 90" fill="none">
<path d="M48.8296 89.4939C51.2075 88.7804 53.0874 87.8174 54.6137 86.7294C54.6137 86.7472 54.5976 86.7651 54.5816 86.7829C54.7904 86.6224 54.9672 86.4619 55.1761 86.3014C55.4653 86.0695 55.7705 85.8555 56.0437 85.6058C56.2847 85.3918 56.4936 85.1599 56.7024 84.9281C57.2005 84.4108 57.6504 83.858 58.036 83.3051C58.1646 83.1267 58.3092 82.9484 58.4216 82.77C58.6144 82.4668 58.759 82.1458 58.9197 81.8426C59.0322 81.6286 59.1447 81.4145 59.2411 81.2005C59.3857 80.8973 59.4981 80.5763 59.6106 80.2731C59.6909 80.0591 59.7713 79.8272 59.8355 79.6132C59.9319 79.31 60.0123 79.0068 60.0926 78.6858C60.1408 78.4717 60.189 78.2577 60.2372 78.0259C60.3015 77.7227 60.3497 77.4195 60.3979 77.1163C60.43 76.9023 60.4461 76.7061 60.4621 76.4921C60.4943 76.1889 60.5264 75.9035 60.5425 75.6181C60.5425 75.4398 60.5425 75.2971 60.5425 75.1187C60.5425 74.5302 60.5425 73.9595 60.5103 73.4244C60.5103 73.2817 60.5103 73.139 60.4782 73.0142C60.4621 72.7645 60.43 72.5327 60.3979 72.3186C60.3818 72.1581 60.3657 71.9976 60.3336 71.8371C60.3015 71.6231 60.2694 71.4447 60.2372 71.2664C60.2051 71.1058 60.189 70.9632 60.1569 70.8205C60.1247 70.66 60.0926 70.5173 60.0605 70.3746C60.0283 70.2319 59.9962 70.1249 59.9801 70.0001C59.948 69.8931 59.932 69.786 59.8998 69.6969C59.8677 69.5899 59.8516 69.5007 59.8195 69.4293C59.8034 69.3758 59.7873 69.3223 59.7713 69.2867C59.7391 69.1975 59.7231 69.144 59.7231 69.144C72.5928 72.5148 73.7014 68.2701 77.2523 59.9232C77.5415 59.2277 77.8467 58.5142 78.1841 57.783C80.0479 53.6453 81.6064 51.7726 83.0525 50.4884C83.8719 49.7572 84.6431 49.2043 85.4143 48.5444C85.5107 48.4731 85.5911 48.3839 85.6875 48.3126C85.8 48.2234 85.8964 48.1164 86.0089 48.0094C86.1213 47.9024 86.2338 47.7775 86.3463 47.6527C86.4426 47.5457 86.539 47.4386 86.6354 47.3316C86.764 47.1889 86.8925 47.0284 87.021 46.8679C87.1174 46.7609 87.1978 46.6361 87.2942 46.5291C87.4388 46.3329 87.5834 46.1188 87.728 45.887C87.8083 45.78 87.8726 45.673 87.953 45.5481C87.969 45.5124 87.9851 45.4946 88.0012 45.4768C88.21 45.1379 88.4189 44.7634 88.6278 44.3532C90.7325 40.2689 83.647 37.1121 74.0549 37.772C73.0909 37.8433 72.1108 37.9504 71.1146 38.093C69.1062 38.3784 67.0336 38.8421 64.9288 39.502C63.8844 39.823 62.824 40.1976 61.7636 40.6256C61.2333 40.8396 60.7032 41.0537 60.189 41.3034C58.6144 42.0168 57.0559 42.8372 55.5135 43.7824C55.5135 43.7824 55.4814 43.8003 55.4653 43.8181C54.7744 44.2462 54.1157 44.6564 53.473 45.0309C53.3123 45.1201 53.1516 45.2271 53.007 45.3163C52.3804 45.6908 51.7859 46.0475 51.2235 46.3685C51.1271 46.422 51.0308 46.4755 50.9344 46.5291C50.4363 46.8144 49.9543 47.0819 49.4883 47.3495C49.3759 47.403 49.2634 47.4743 49.1509 47.5278C48.6529 47.8132 48.1708 48.0629 47.7209 48.2947C47.6245 48.3482 47.5121 48.4017 47.4157 48.4552C47.014 48.6693 46.6284 48.8655 46.2588 49.0438C46.2106 49.0795 46.1463 49.0973 46.0981 49.133C45.6965 49.3292 45.343 49.5075 44.9896 49.668C44.9092 49.7037 44.8128 49.7572 44.7325 49.7929C44.3951 49.9534 44.0737 50.0961 43.7684 50.2209C43.7363 50.2209 43.7042 50.2566 43.672 50.2566C43.3989 50.3636 43.1418 50.4706 42.9008 50.5598C42.8365 50.5776 42.7723 50.6133 42.708 50.6311C42.467 50.7203 42.226 50.8095 42.0171 50.8808C41.9689 50.8808 41.9207 50.9165 41.8725 50.9343C41.6797 50.9878 41.5191 51.0413 41.3584 51.0948C41.3262 51.0948 41.2941 51.1127 41.262 51.1305C41.0852 51.184 40.9245 51.2197 40.7799 51.2375C40.7478 51.2375 40.7157 51.2375 40.6835 51.2554C40.5389 51.2732 40.4104 51.291 40.2979 51.3089C40.1694 51.3089 40.073 51.3089 39.9766 51.3089C39.9605 51.3089 39.9445 51.3089 39.9284 51.3089C39.832 51.3089 39.7517 51.3089 39.6874 51.2732C39.6231 51.2732 39.5589 51.2375 39.5107 51.2197C39.4625 51.2019 39.4142 51.1662 39.3821 51.1483C39.2536 51.0592 39.2375 50.9522 39.2375 50.9165C40.3461 50.6133 41.3262 49.8107 41.8565 48.5801C42.3063 47.5457 42.3385 46.4399 42.0653 45.4233C45.3591 44.6029 50.7737 42.748 54.2763 38.7351C54.5013 38.4676 54.5013 38.0395 54.2763 37.7898C54.0353 37.5223 53.6497 37.5402 53.4248 37.7898C50.0828 41.6244 44.6521 43.4079 41.5351 44.157C41.1656 43.5506 40.6514 43.0512 40.0248 42.7123C39.2536 42.3021 38.402 42.1951 37.6147 42.3556C36.2008 39.288 33.839 33.224 34.4656 27.6952C34.5138 27.3206 34.2728 26.9996 33.9354 26.9461C33.598 26.8926 33.3088 27.1601 33.2605 27.5346C32.6018 33.3667 34.9476 39.5555 36.4418 42.8015C35.7188 43.2296 35.1083 43.8895 34.7387 44.7634C34.2085 45.994 34.2567 47.3495 34.7387 48.5087C34.6905 48.5266 34.6584 48.5801 34.6102 48.5979C34.6102 48.5979 34.5941 48.5979 34.5781 48.5979C34.5299 48.5623 34.4656 48.5088 34.4013 48.4552C34.3852 48.4552 34.3692 48.4196 34.3531 48.4017C34.3049 48.3482 34.2407 48.2769 34.1764 48.2056C34.1442 48.1699 34.1121 48.1164 34.096 48.0807C34.0317 47.9915 33.9836 47.9024 33.9193 47.7953C33.8872 47.7418 33.855 47.6883 33.8229 47.6348C33.7426 47.4921 33.6622 47.3316 33.5819 47.1533C33.5658 47.0998 33.5337 47.0641 33.5176 47.0106C33.4052 46.7609 33.3088 46.4934 33.1802 46.1723C33.1481 46.101 33.132 46.0118 33.0999 45.9405C33.0035 45.6908 32.9071 45.4054 32.8107 45.1022C32.7785 44.9774 32.7304 44.8347 32.6822 44.7099C32.5858 44.4067 32.4893 44.0856 32.409 43.7289C32.3608 43.5863 32.3287 43.4257 32.2805 43.2652C32.1519 42.8015 32.0234 42.3021 31.8948 41.7492C31.8948 41.6779 31.8627 41.6422 31.8466 41.5709C31.702 40.9467 31.5414 40.2511 31.3968 39.5198C31.3646 39.3237 31.3164 39.1275 31.2682 38.9313C31.1558 38.3606 31.0272 37.772 30.9148 37.1299C30.8666 36.8446 30.8023 36.5592 30.7541 36.256C30.6416 35.614 30.5131 34.9362 30.4006 34.2407C30.3524 33.9375 30.3042 33.6521 30.2399 33.3311C30.0632 32.2966 29.8865 31.2265 29.7097 30.0494C28.8421 24.2887 26.9783 18.9916 24.6968 14.4793C23.9417 12.9812 23.1383 11.5722 22.3028 10.2524C21.7886 9.432 21.2584 8.66509 20.7121 7.91602C20.3908 7.47014 20.0695 7.05993 19.7481 6.64972C14.8798 0.478771 9.86685 -1.96464 8.54934 1.7629C8.38867 2.24445 8.2441 2.67249 8.13163 3.10053C8.0995 3.24321 8.06737 3.36806 8.03523 3.51074C7.97096 3.77827 7.90667 4.0458 7.85847 4.29549C7.82634 4.456 7.81029 4.59868 7.77815 4.74136C7.74602 4.95539 7.71386 5.15157 7.69779 5.34776C7.68172 5.50828 7.66566 5.65096 7.64959 5.81147C7.64959 5.98982 7.63354 6.15034 7.61747 6.32869C7.61747 6.48921 7.61747 6.64972 7.61747 6.81024C7.61747 6.93508 7.61747 7.05993 7.61747 7.18478C7.63354 8.27272 7.72995 9.28932 7.72995 10.4486C7.72995 12.4996 7.39253 15.0144 5.65729 19.2235C5.35201 19.9726 5.03066 20.686 4.74145 21.3815C1.11029 29.6749 -1.18728 33.2954 9.24027 42.32C9.24027 42.32 9.19202 42.32 9.14382 42.3556C9.14382 42.3556 9.14385 42.3556 9.12778 42.3556C9.06352 42.3913 8.95104 42.427 8.8225 42.4805C8.8225 42.4805 8.82247 42.4805 8.79034 42.4805C7.53711 43.0334 3.93812 44.9239 1.75299 48.8833C-0.0143881 52.0758 -0.865956 56.6237 1.23883 62.9195C1.41557 63.4367 1.59229 63.954 1.81723 64.489C2.0261 65.0241 2.26714 65.5235 2.50815 66.005C2.50815 66.005 2.50815 66.005 2.50815 66.0228C2.74915 66.4865 3.00623 66.8968 3.2633 67.2891C10.5899 77.9367 27.5567 63.187 30.3685 60.6188L24.9539 74.5124C24.6968 75.1722 24.9539 75.957 25.5484 76.278C26.1428 76.5991 26.8498 76.3315 27.1551 75.6716L33.6622 61.7602C33.6622 61.7602 32.6982 92.2405 47.2711 89.8684C47.2871 89.8684 47.3032 89.8684 47.3193 89.8684C47.8013 89.7792 48.2993 89.6722 48.8135 89.5117L48.8296 89.4939Z" fill="#2BAE7A"/>
</svg>
  </div>
</div>


{/* image */}
<div className="hidden md:flex">
<img src={bannerImg} alt="banner-image" />
</div>

    </div>
      </Container>
    </section>
  );
};

export default Banner;