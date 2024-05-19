import React from 'react'
import imgg from '../assets/2149273699.jpg'
import Button2 from './Button2'
import green from '../assets/green.png'
const Hero = () => {
  return (
    <div className='h-fit w-full bg-white p-7 lg:py-7 lg:px-10'>
        <img className='absolute left-[117px] w-[260px] h-[95px] top-[320px] hidden lg:block' src={green} alt="" />
        <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row justify-evenly px-5 mb-6'>
            <div className='flex flex-col items-center lg:items-start gap-7 lg:gap-0 lg:w-1/2 text-center lg:text-left'>
                <h1 className='text-zinc-900 text-5xl pt-7 lg:text-[80px] font-bold lg:leading-[87px] lg:pt-10 lg:pb-5'>Elevate  Your  Workspace  With  Cowork</h1>
                <p className='text-sm font-medium lg:pl-2 lg:pr-11 lg:pb-8 lg:leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga unde labore beatae exercitationem, similique, aliquid enim nobis obcaecati itaque maiores aut. Nostrum debitis sit doloribus laboriosam maiores? Id, architecto voluptatibus.</p>    
                <Button2 content={'Claim Your Spot'}/>
            </div>
            <div className='lg:w-[550px] lg:h-[480px] rounded-3xl lg:rounded-[45px] my-3'>
                <img className='shadow-xl lg:w-[550px] lg:h-[480px] rounded-3xl lg:rounded-[45px] object-cover' src={imgg} alt="workspace image"/>
            </div>
        </div>
        <div className='text-xs font-bold text-center text-zinc-900 pt-16'>TRUSTED BY LEADING COMPANIES</div>
        <div className='flex justify-evenly items-center px-10 pt-7 pb-12'>
            <svg xmlns="http://www.w3.org/2000/svg" width="220" height="40" fill="none" viewBox="0 0 220 40"><path fill="#0E1534" d="M20 40c11.046 0 20-8.954 20-20V6a6 6 0 0 0-6-6H21v8.774c0 2.002.122 4.076 1.172 5.78a9.999 9.999 0 0 0 6.904 4.627l.383.062a.8.8 0 0 1 0 1.514l-.383.062a10 10 0 0 0-8.257 8.257l-.062.383a.8.8 0 0 1-1.514 0l-.062-.383a10 10 0 0 0-4.627-6.904C12.85 21.122 10.776 21 8.774 21H.024C.547 31.581 9.29 40 20 40Z"></path><path fill="#0E1534" d="M0 19h8.774c2.002 0 4.076-.122 5.78-1.172a10.018 10.018 0 0 0 3.274-3.274C18.878 12.85 19 10.776 19 8.774V0H6a6 6 0 0 0-6 6v13ZM46.455 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM211.711 12.104c5.591 0 8.289 3.905 8.289 8.428v8.495h-5.851V21.54c0-2.05-.748-3.742-2.893-3.742-2.145 0-2.86 1.692-2.86 3.742v7.486h-5.851V21.54c0-2.05-.715-3.742-2.861-3.742-2.145 0-2.893 1.692-2.893 3.742v7.486h-5.85v-8.495c0-4.523 2.697-8.428 8.288-8.428 3.056 0 5.266 1.204 6.274 3.189 1.072-1.985 3.413-3.19 6.208-3.19ZM180.427 23.82c1.885 0 2.698-1.725 2.698-3.776v-7.29h5.85v8.006c0 4.784-2.795 8.755-8.548 8.755-5.754 0-8.549-3.97-8.549-8.755v-8.006h5.851v7.29c0 2.05.812 3.776 2.698 3.776ZM163.275 29.547c-3.673 0-6.046-1.269-7.444-3.742l4.226-2.376c.585 1.041 1.462 1.562 2.925 1.562 1.203 0 1.755-.423 1.755-.944 0-1.985-8.581.033-8.581-6.28 0-3.06 2.6-5.533 7.021-5.533 3.868 0 5.981 1.887 6.924 3.71l-4.226 2.408c-.357-.976-1.463-1.562-2.568-1.562-.845 0-1.3.358-1.3.846 0 2.018 8.581.163 8.581 6.281 0 3.417-3.348 5.63-7.313 5.63ZM142.833 36.512h-5.851V20.858c0-4.98 3.738-8.592 8.939-8.592 5.071 0 8.939 3.873 8.939 8.592 0 5.207-3.446 8.657-8.614 8.657-1.203 0-2.405-.358-3.413-.912v7.909Zm3.088-12.497c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.124-3.088-3.124s-3.088 1.4-3.088 3.125c0 1.692 1.235 3.124 3.088 3.124ZM131.121 11.03c-1.918 0-3.51-1.595-3.51-3.515 0-1.92 1.592-3.515 3.51-3.515 1.918 0 3.511 1.595 3.511 3.515 0 1.92-1.593 3.515-3.511 3.515Zm-2.925 1.724h5.851v16.273h-5.851V12.754ZM116.97 29.515c-5.071 0-8.939-3.905-8.939-8.657 0-4.719 3.868-8.624 8.939-8.624s8.939 3.905 8.939 8.624c0 4.752-3.868 8.657-8.939 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM96.983 37c-4.03 0-6.956-1.79-8.451-4.98l4.843-2.603c.52 1.107 1.495 2.246 3.51 2.246 2.114 0 3.511-1.335 3.674-3.678-.78.684-2.016 1.204-3.868 1.204-4.519 0-8.16-3.482-8.16-8.364 0-4.718 3.869-8.559 8.94-8.559 5.201 0 8.939 3.613 8.939 8.592v6.444c0 5.858-4.064 9.698-9.427 9.698Zm.39-13.31c1.755 0 3.088-1.205 3.088-2.995 0-1.757-1.332-2.929-3.088-2.929-1.723 0-3.088 1.172-3.088 2.93 0 1.79 1.365 2.993 3.088 2.993ZM78.607 29.515c-5.071 0-8.94-3.905-8.94-8.657 0-4.719 3.869-8.624 8.94-8.624 5.07 0 8.939 3.905 8.939 8.624 0 4.752-3.869 8.657-8.94 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM59.013 7.06v16.434H68.7v5.533H58.2c-3.705 0-5.2-1.953-5.2-5.045V7.06h6.013Z"></path></svg>
            <svg id="logo-49" width="154" height="27" viewBox="0 0 154 27" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23.1526 20.6945H31.1477L11.3422 0.888916L3.34702 0.888916L23.1526 20.6945Z" class="ccompli1" fill="#7476ED"></path> <path d="M15.4497 0.888917L34.5419 19.9811V0.888916H29.3752V6.91668L23.3474 0.888916L15.4497 0.888917Z" class="ccompli2" fill="#E56F8C"></path> <path d="M0 1.55194V20.6944L5.16667 20.6944V14.6666L11.1944 20.6944H19.1425L0 1.55194Z" class="ccustom" fill="#64C2DB"></path> <path d="M47.0098 17.7164H51.6391V20.4444H43.4758V5.93644H47.0098V17.7164Z" class="cneutral" fill="#3A3B7B"></path> <path d="M57.9541 20.6098C56.8243 20.6098 55.8047 20.3687 54.8954 19.8864C53.9998 19.4042 53.2903 18.7153 52.7667 17.8198C52.257 16.9242 52.0021 15.8771 52.0021 14.6784C52.0021 13.4936 52.2638 12.4533 52.7874 11.5578C53.311 10.6484 54.0274 9.95266 54.9367 9.47044C55.8461 8.98822 56.8656 8.74711 57.9954 8.74711C59.1252 8.74711 60.1447 8.98822 61.0541 9.47044C61.9634 9.95266 62.6798 10.6484 63.2034 11.5578C63.727 12.4533 63.9887 13.4936 63.9887 14.6784C63.9887 15.8633 63.7201 16.9104 63.1827 17.8198C62.6592 18.7153 61.9358 19.4042 61.0127 19.8864C60.1034 20.3687 59.0838 20.6098 57.9541 20.6098ZM57.9541 17.5511C58.6292 17.5511 59.201 17.3031 59.6694 16.8071C60.1516 16.3111 60.3927 15.6016 60.3927 14.6784C60.3927 13.7553 60.1585 13.0458 59.6901 12.5498C59.2354 12.0538 58.6705 11.8058 57.9954 11.8058C57.3065 11.8058 56.7347 12.0538 56.2801 12.5498C55.8254 13.032 55.5981 13.7416 55.5981 14.6784C55.5981 15.6016 55.8185 16.3111 56.2594 16.8071C56.7141 17.3031 57.279 17.5511 57.9541 17.5511Z" class="cneutral" fill="#3A3B7B"></path> <path d="M69.6249 8.74711C70.4378 8.74711 71.1474 8.91244 71.7536 9.24311C72.3736 9.57378 72.8489 10.0078 73.1796 10.5451V8.91244H76.7136V20.4238C76.7136 21.4847 76.5 22.4422 76.0729 23.2964C75.6596 24.1644 75.0189 24.8533 74.1509 25.3631C73.2967 25.8729 72.2289 26.1278 70.9476 26.1278C69.2391 26.1278 67.8545 25.7213 66.7936 24.9084C65.7327 24.1093 65.1265 23.0209 64.9749 21.6431H68.4676C68.5778 22.084 68.8396 22.4284 69.2529 22.6764C69.6663 22.9382 70.176 23.0691 70.7823 23.0691C71.5125 23.0691 72.0911 22.8556 72.5183 22.4284C72.9591 22.0151 73.1796 21.3469 73.1796 20.4238V18.7911C72.8351 19.3284 72.3598 19.7693 71.7536 20.1138C71.1474 20.4444 70.4378 20.6098 69.6249 20.6098C68.6743 20.6098 67.8131 20.3687 67.0416 19.8864C66.27 19.3904 65.6569 18.6947 65.2023 17.7991C64.7614 16.8898 64.5409 15.8427 64.5409 14.6578C64.5409 13.4729 64.7614 12.4327 65.2023 11.5371C65.6569 10.6416 66.27 9.95266 67.0416 9.47044C67.8131 8.98822 68.6743 8.74711 69.6249 8.74711ZM73.1796 14.6784C73.1796 13.7967 72.9316 13.1009 72.4356 12.5911C71.9534 12.0813 71.3609 11.8264 70.6583 11.8264C69.9556 11.8264 69.3563 12.0813 68.8603 12.5911C68.378 13.0871 68.1369 13.776 68.1369 14.6578C68.1369 15.5396 68.378 16.2422 68.8603 16.7658C69.3563 17.2756 69.9556 17.5304 70.6583 17.5304C71.3609 17.5304 71.9534 17.2756 72.4356 16.7658C72.9316 16.256 73.1796 15.5602 73.1796 14.6784Z" class="cneutral" fill="#3A3B7B"></path> <path d="M83.8996 20.6098C82.7698 20.6098 81.7503 20.3687 80.8409 19.8864C79.9454 19.4042 79.2358 18.7153 78.7123 17.8198C78.2025 16.9242 77.9476 15.8771 77.9476 14.6784C77.9476 13.4936 78.2094 12.4533 78.7329 11.5578C79.2565 10.6484 79.9729 9.95266 80.8823 9.47044C81.7916 8.98822 82.8112 8.74711 83.9409 8.74711C85.0707 8.74711 86.0903 8.98822 86.9996 9.47044C87.9089 9.95266 88.6254 10.6484 89.1489 11.5578C89.6725 12.4533 89.9343 13.4936 89.9343 14.6784C89.9343 15.8633 89.6656 16.9104 89.1283 17.8198C88.6047 18.7153 87.8814 19.4042 86.9583 19.8864C86.0489 20.3687 85.0294 20.6098 83.8996 20.6098ZM83.8996 17.5511C84.5747 17.5511 85.1465 17.3031 85.6149 16.8071C86.0972 16.3111 86.3383 15.6016 86.3383 14.6784C86.3383 13.7553 86.1041 13.0458 85.6356 12.5498C85.1809 12.0538 84.6161 11.8058 83.9409 11.8058C83.2521 11.8058 82.6803 12.0538 82.2256 12.5498C81.7709 13.032 81.5436 13.7416 81.5436 14.6784C81.5436 15.6016 81.7641 16.3111 82.2049 16.8071C82.6596 17.3031 83.2245 17.5511 83.8996 17.5511Z" class="cneutral" fill="#3A3B7B"></path> <path d="M92.9665 7.71378C92.3465 7.71378 91.8367 7.53466 91.4371 7.17644C91.0514 6.80444 90.8585 6.34978 90.8585 5.81244C90.8585 5.26133 91.0514 4.80666 91.4371 4.44844C91.8367 4.07644 92.3465 3.89044 92.9665 3.89044C93.5727 3.89044 94.0687 4.07644 94.4545 4.44844C94.854 4.80666 95.0538 5.26133 95.0538 5.81244C95.0538 6.34978 94.854 6.80444 94.4545 7.17644C94.0687 7.53466 93.5727 7.71378 92.9665 7.71378ZM94.7231 8.91244V20.4444H91.1891V8.91244H94.7231Z" class="cneutral" fill="#3A3B7B"></path> <path d="M100.198 10.5451C100.543 10.0078 101.018 9.57378 101.624 9.24311C102.23 8.91244 102.94 8.74711 103.753 8.74711C104.704 8.74711 105.565 8.98822 106.336 9.47044C107.108 9.95266 107.714 10.6416 108.155 11.5371C108.61 12.4327 108.837 13.4729 108.837 14.6578C108.837 15.8427 108.61 16.8898 108.155 17.7991C107.714 18.6947 107.108 19.3904 106.336 19.8864C105.565 20.3687 104.704 20.6098 103.753 20.6098C102.954 20.6098 102.244 20.4444 101.624 20.1138C101.018 19.7831 100.543 19.356 100.198 18.8324V25.9418H96.6642V8.91244H100.198V10.5451ZM105.241 14.6578C105.241 13.776 104.993 13.0871 104.497 12.5911C104.015 12.0813 103.415 11.8264 102.699 11.8264C101.996 11.8264 101.397 12.0813 100.901 12.5911C100.419 13.1009 100.178 13.7967 100.178 14.6784C100.178 15.5602 100.419 16.256 100.901 16.7658C101.397 17.2756 101.996 17.5304 102.699 17.5304C103.402 17.5304 104.001 17.2756 104.497 16.7658C104.993 16.2422 105.241 15.5396 105.241 14.6578Z" class="cneutral" fill="#3A3B7B"></path> <path d="M114.762 20.6098C113.756 20.6098 112.861 20.4376 112.076 20.0931C111.29 19.7487 110.67 19.2802 110.216 18.6878C109.761 18.0816 109.506 17.4064 109.451 16.6624H112.944C112.985 17.062 113.171 17.3858 113.502 17.6338C113.832 17.8818 114.239 18.0058 114.721 18.0058C115.162 18.0058 115.499 17.9231 115.734 17.7578C115.982 17.5787 116.106 17.3513 116.106 17.0758C116.106 16.7451 115.933 16.504 115.589 16.3524C115.244 16.1871 114.686 16.008 113.915 15.8151C113.088 15.6222 112.399 15.4224 111.848 15.2158C111.297 14.9953 110.822 14.6578 110.422 14.2031C110.023 13.7347 109.823 13.1078 109.823 12.3224C109.823 11.6611 110.002 11.0618 110.36 10.5244C110.732 9.97333 111.27 9.53933 111.972 9.22244C112.689 8.90555 113.536 8.74711 114.514 8.74711C115.961 8.74711 117.098 9.10533 117.924 9.82178C118.765 10.5382 119.247 11.4889 119.371 12.6738H116.106C116.05 12.2742 115.871 11.9573 115.568 11.7231C115.279 11.4889 114.893 11.3718 114.411 11.3718C113.998 11.3718 113.681 11.4544 113.46 11.6198C113.24 11.7713 113.13 11.9849 113.13 12.2604C113.13 12.5911 113.302 12.8391 113.646 13.0044C114.004 13.1698 114.556 13.3351 115.3 13.5004C116.154 13.7209 116.85 13.9413 117.387 14.1618C117.924 14.3684 118.393 14.7129 118.792 15.1951C119.206 15.6636 119.419 16.2973 119.433 17.0964C119.433 17.7716 119.24 18.3778 118.854 18.9151C118.482 19.4387 117.938 19.852 117.222 20.1551C116.519 20.4582 115.699 20.6098 114.762 20.6098Z" class="cneutral" fill="#3A3B7B"></path> <path d="M132.362 8.91244V20.4444H128.828V18.8738C128.47 19.3836 127.981 19.7969 127.361 20.1138C126.755 20.4169 126.08 20.5684 125.336 20.5684C124.454 20.5684 123.675 20.3756 123 19.9898C122.325 19.5902 121.802 19.0184 121.43 18.2744C121.058 17.5304 120.872 16.6556 120.872 15.6498V8.91244H124.385V15.1744C124.385 15.946 124.585 16.5453 124.984 16.9724C125.384 17.3996 125.921 17.6131 126.596 17.6131C127.285 17.6131 127.829 17.3996 128.229 16.9724C128.629 16.5453 128.828 15.946 128.828 15.1744V8.91244H132.362Z" className="cneutral" fill="#3A3B7B"></path> <path d="M148.995 8.78844C150.428 8.78844 151.565 9.22244 152.405 10.0904C153.26 10.9584 153.687 12.164 153.687 13.7071V20.4444H150.173V14.1824C150.173 13.4384 149.974 12.8667 149.574 12.4671C149.188 12.0538 148.651 11.8471 147.962 11.8471C147.273 11.8471 146.729 12.0538 146.329 12.4671C145.944 12.8667 145.751 13.4384 145.751 14.1824V20.4444H142.237V14.1824C142.237 13.4384 142.038 12.8667 141.638 12.4671C141.252 12.0538 140.715 11.8471 140.026 11.8471C139.337 11.8471 138.793 12.0538 138.393 12.4671C138.008 12.8667 137.815 13.4384 137.815 14.1824V20.4444H134.281V8.91244H137.815V10.3591C138.173 9.87689 138.641 9.498 139.22 9.22244C139.799 8.93311 140.453 8.78844 141.183 8.78844C142.051 8.78844 142.823 8.97444 143.498 9.34644C144.187 9.71844 144.724 10.2489 145.11 10.9378C145.51 10.304 146.054 9.78733 146.743 9.38778C147.432 8.98822 148.183 8.78844 148.995 8.78844Z" className="cneutral" fill="#3A3B7B"></path> </svg>
            <svg id="logo-76" width="218" height="40" viewBox="0 0 218 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="ccustom" d="M122.355 29.5238H127.018V11.9352H122.355V29.5238ZM122.355 9.19238H127.018V5.00952H122.355V9.19238Z" fill="black"></path><path class="ccustom" d="M130.023 35.2838H134.686V27.5352H134.754C135.748 29.0438 137.36 30.0381 139.828 30.0381C144.354 30.0381 147.44 26.4381 147.44 20.7467C147.44 15.2609 144.457 11.4552 139.794 11.4552C137.394 11.4552 135.748 12.5867 134.617 14.1295H134.514V11.9352H130.023V35.2838ZM138.834 26.1638C136.057 26.1638 134.583 24.0724 134.583 20.8838C134.583 17.7295 135.748 15.2267 138.663 15.2267C141.543 15.2267 142.708 17.5581 142.708 20.8838C142.708 24.2095 141.2 26.1638 138.834 26.1638Z" fill="black"></path><path class="ccustom" d="M156.741 30.0381C161.13 30.0381 164.147 27.9124 164.147 24.3809C164.147 20.2667 160.89 19.4438 157.941 18.8267C155.438 18.3124 153.107 18.1752 153.107 16.6667C153.107 15.3981 154.307 14.7124 156.124 14.7124C158.113 14.7124 159.313 15.3981 159.518 17.2838H163.735C163.393 13.7524 160.821 11.4552 156.193 11.4552C152.181 11.4552 149.027 13.2724 149.027 17.0781C149.027 20.9181 152.113 21.7752 155.267 22.3924C157.667 22.8724 159.895 23.0438 159.895 24.7238C159.895 25.9581 158.73 26.7467 156.673 26.7467C154.581 26.7467 153.141 25.8552 152.833 23.8324H148.513C148.787 27.5695 151.633 30.0381 156.741 30.0381Z" fill="black"></path><path class="ccustom" d="M181.85 29.5238V11.9352H177.187V22.0838C177.187 24.4152 175.85 26.0609 173.656 26.0609C171.667 26.0609 170.742 24.9295 170.742 22.8724V11.9352H166.113V23.6609C166.113 27.5009 168.307 30.0038 172.216 30.0038C174.685 30.0038 176.056 29.0781 177.256 27.4667H177.359V29.5238H181.85Z" fill="black"></path><path class="ccustom" d="M184.866 29.5238H189.529V19.3067C189.529 16.9752 190.798 15.4667 192.684 15.4667C194.398 15.4667 195.392 16.4952 195.392 18.4838V29.5238H200.055V19.3067C200.055 16.9752 201.255 15.4667 203.209 15.4667C204.924 15.4667 205.918 16.4952 205.918 18.4838V29.5238H210.581V17.6952C210.581 13.8552 208.489 11.4552 204.786 11.4552C202.558 11.4552 200.706 12.6209 199.506 14.5409H199.438C198.581 12.6895 196.798 11.4552 194.569 11.4552C192.135 11.4552 190.421 12.6895 189.461 14.3009H189.358V11.9352H184.866V29.5238Z" fill="black"></path><path class="ccustom" d="M0.824158 29.5238H5.48701V5.00952H0.824158V29.5238Z" fill="black"></path><path class="ccustom" d="M16.8884 30.0381C22.3398 30.0381 26.0769 25.9924 26.0769 20.7467C26.0769 15.5009 22.3398 11.4552 16.8884 11.4552C11.4369 11.4552 7.69978 15.5009 7.69978 20.7467C7.69978 25.9924 11.4369 30.0381 16.8884 30.0381ZM16.8884 26.4724C14.0084 26.4724 12.4312 24.1752 12.4312 20.7467C12.4312 17.3181 14.0084 14.9867 16.8884 14.9867C19.7341 14.9867 21.3455 17.3181 21.3455 20.7467C21.3455 24.1752 19.7341 26.4724 16.8884 26.4724Z" fill="black"></path><path class="ccustom" d="M35.993 35.5238C38.5987 35.5238 40.8616 34.9067 42.3358 33.5352C43.6387 32.3352 44.4273 30.6552 44.4273 28.1867V11.9352H39.9359V13.7867H39.8673C38.8044 12.3124 37.193 11.4552 34.9987 11.4552C30.5416 11.4552 27.3873 14.8152 27.3873 20.0609C27.3873 25.3752 31.2273 28.4609 35.1359 28.4609C37.3644 28.4609 38.7016 27.5695 39.7301 26.4038H39.833V28.3238C39.833 30.7238 38.5644 31.9924 35.9244 31.9924C33.7644 31.9924 32.7701 31.1352 32.393 30.0381H27.7644C28.2444 33.4667 31.193 35.5238 35.993 35.5238ZM35.9244 24.7238C33.5244 24.7238 31.9473 22.9752 31.9473 19.9924C31.9473 17.0438 33.5244 15.1924 35.8901 15.1924C38.7016 15.1924 40.073 17.3867 40.073 19.9581C40.073 22.5638 38.873 24.7238 35.9244 24.7238Z" fill="black"></path><path class="ccustom" d="M55.7611 30.0381C61.2125 30.0381 64.9497 25.9924 64.9497 20.7467C64.9497 15.5009 61.2125 11.4552 55.7611 11.4552C50.3097 11.4552 46.5725 15.5009 46.5725 20.7467C46.5725 25.9924 50.3097 30.0381 55.7611 30.0381ZM55.7611 26.4724C52.8811 26.4724 51.304 24.1752 51.304 20.7467C51.304 17.3181 52.8811 14.9867 55.7611 14.9867C58.6068 14.9867 60.2183 17.3181 60.2183 20.7467C60.2183 24.1752 58.6068 26.4724 55.7611 26.4724Z" fill="black"></path><path class="ccustom" d="M212.275 9.04762C212.275 8.25864 212.915 7.61905 213.704 7.61905H216.561C217.35 7.61905 217.99 8.25864 217.99 9.04762C217.99 9.8366 217.35 10.4762 216.561 10.4762H213.704C212.915 10.4762 212.275 9.8366 212.275 9.04762Z" fill="black"></path><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M93.2277 0C104.273 0 113.228 8.95431 113.228 20C113.228 31.0457 104.273 40 93.2277 40C82.182 40 73.2277 31.0457 73.2277 20C73.2277 8.95431 82.182 0 93.2277 0ZM92.5048 1.49659C90.2231 1.81769 88.0505 3.65108 86.364 6.7174C85.8748 7.60683 85.4334 8.58946 85.0488 9.65044C87.342 9.07417 89.8611 8.73442 92.5048 8.68187V1.49659ZM83.3584 10.1308C83.8368 8.62958 84.4219 7.2484 85.0972 6.02065C85.9332 4.50059 86.9254 3.18795 88.0433 2.17977C81.9644 3.94523 77.1729 8.73679 75.4074 14.8157C76.4156 13.6978 77.7282 12.7056 79.2483 11.8696C80.4761 11.1943 81.8572 10.6091 83.3584 10.1308ZM82.8781 11.8211C82.3018 14.1143 81.9621 16.6334 81.9095 19.2771H74.7242C75.0453 16.9954 76.8787 14.8228 79.9451 13.1364C80.8345 12.6472 81.8171 12.2058 82.8781 11.8211ZM83.3556 19.2771C83.4153 16.392 83.8307 13.6834 84.5179 11.2902C86.9111 10.603 89.6197 10.1876 92.5048 10.1279V13.2508C91.4285 16.0062 89.2333 18.2012 86.4778 19.2771H83.3556ZM81.9095 20.7229H74.7242C75.0453 23.0046 76.8787 25.1771 79.9451 26.8636C80.8345 27.3528 81.8171 27.7942 82.8781 28.1789C82.3018 25.8857 81.9621 23.3666 81.9095 20.7229ZM84.5179 28.7098C83.8307 26.3166 83.4153 23.608 83.3556 20.7229H86.4778C89.2333 21.7988 91.4285 23.9938 92.5048 26.7492V29.8721C89.6197 29.8124 86.9111 29.397 84.5179 28.7098ZM83.3584 29.8692C81.8572 29.3909 80.4761 28.8057 79.2483 28.1304C77.7282 27.2944 76.4156 26.3022 75.4074 25.1843C77.1729 31.2632 81.9644 36.0548 88.0433 37.8202C86.9254 36.812 85.9332 35.4994 85.0972 33.9793C84.4219 32.7516 83.8368 31.3704 83.3584 29.8692ZM92.5048 38.5034C90.2231 38.1823 88.0505 36.3489 86.364 33.2826C85.8748 32.3932 85.4334 31.4105 85.0488 30.3496C87.342 30.9258 89.8611 31.2656 92.5048 31.3181V38.5034ZM98.412 37.8202C99.5299 36.812 100.522 35.4994 101.358 33.9793C102.033 32.7516 102.619 31.3704 103.097 29.8692C104.598 29.3909 105.979 28.8057 107.207 28.1304C108.727 27.2944 110.04 26.3022 111.048 25.1843C109.282 31.2632 104.491 36.0548 98.412 37.8202ZM101.407 30.3496C101.022 31.4105 100.58 32.3932 100.091 33.2826C98.4048 36.3489 96.2322 38.1823 93.9505 38.5034V31.3181C96.5942 31.2656 99.1133 30.9258 101.407 30.3496ZM103.577 28.1789C104.638 27.7942 105.621 27.3528 106.51 26.8636C109.577 25.1772 111.41 23.0046 111.731 20.7229H104.546C104.493 23.3666 104.153 25.8857 103.577 28.1789ZM103.1 20.7229C103.04 23.608 102.625 26.3166 101.937 28.7098C99.5442 29.397 96.8356 29.8124 93.9505 29.8721V26.7515C95.0265 23.9951 97.2222 21.7991 99.9784 20.7229H103.1ZM104.546 19.2771H111.731C111.41 16.9954 109.577 14.8228 106.51 13.1364C105.621 12.6472 104.638 12.2058 103.577 11.8211C104.153 14.1143 104.493 16.6334 104.546 19.2771ZM101.937 11.2902C102.625 13.6834 103.04 16.392 103.1 19.2771H99.9785C97.2222 18.2009 95.0265 16.0049 93.9505 13.2485V10.1279C96.8356 10.1876 99.5442 10.603 101.937 11.2902ZM103.097 10.1308C104.598 10.6091 105.979 11.1943 107.207 11.8696C108.727 12.7056 110.04 13.6978 111.048 14.8157C109.282 8.73679 104.491 3.94523 98.412 2.17977C99.5299 3.18795 100.522 4.50059 101.358 6.02065C102.033 7.2484 102.619 8.62958 103.097 10.1308ZM93.9505 1.49659C96.2322 1.81769 98.4048 3.65108 100.091 6.7174C100.58 7.60684 101.022 8.58946 101.407 9.65044C99.1133 9.07417 96.5942 8.73442 93.9505 8.68187V1.49659Z" fill="black"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="187" height="40" fill="none" viewBox="0 0 187 40"><path fill="#3A724F" fill-rule="evenodd" d="M19.87 4.567 22.507 0l7.476 4.317-2.636 4.566c-.463.801.23 1.775 1.138 1.6l5.052-.975 1.635 8.477-5.052.974c-8.172 1.576-14.411-7.184-10.25-14.392Z" clip-rule="evenodd"></path><path fill="#DC8E43" fill-rule="evenodd" d="M15.302 35.433 12.665 40l-7.477-4.316 2.637-4.567c.463-.801-.23-1.775-1.139-1.6l-5.051.974L0 22.015l5.052-.974c8.172-1.576 14.41 7.184 10.25 14.392Z" clip-rule="evenodd"></path><path fill="#14424C" fill-rule="evenodd" d="M15.53 4.567 12.894 0 5.417 4.317l2.637 4.566c.462.801-.23 1.775-1.139 1.6l-5.052-.975L.23 17.985l5.051.974c8.173 1.576 14.412-7.184 10.25-14.392Z" clip-rule="evenodd"></path><path fill="#C85D1B" fill-rule="evenodd" d="M19.65 35.433 22.285 40l7.477-4.316-2.637-4.567c-.462-.801.23-1.775 1.139-1.6l5.051.974 1.635-8.476-5.052-.974c-8.172-1.576-14.41 7.184-10.25 14.392Z" clip-rule="evenodd"></path><path fill="#14424C" d="M163.114 30.153v-8.5c0-1.178.271-2.235.813-3.17.561-.954 1.356-1.702 2.385-2.245 1.029-.542 2.254-.813 3.675-.813a7.23 7.23 0 0 1 1.964.252c.599.15 1.141.365 1.627.645.505.262.935.58 1.291.954h.056a5.5 5.5 0 0 1 1.29-.954 6.772 6.772 0 0 1 1.656-.645 7.541 7.541 0 0 1 1.992-.252c1.421 0 2.646.27 3.675.813 1.028.543 1.823 1.29 2.384 2.245.562.935.842 1.991.842 3.17v8.5h-4.377v-8.36c0-.467-.121-.888-.364-1.262a2.663 2.663 0 0 0-.926-.954 2.508 2.508 0 0 0-1.347-.365c-.505 0-.963.122-1.374.365a2.654 2.654 0 0 0-.926.954 2.4 2.4 0 0 0-.337 1.262v8.36h-4.348v-8.36c0-.467-.122-.888-.365-1.262a2.585 2.585 0 0 0-.954-.954 2.508 2.508 0 0 0-1.347-.365c-.505 0-.963.122-1.374.365a2.654 2.654 0 0 0-.926.954 2.41 2.41 0 0 0-.337 1.262v8.36h-4.348ZM153.603 30.49c-1.477 0-2.759-.28-3.843-.842-1.066-.58-1.889-1.356-2.469-2.328-.58-.991-.87-2.086-.87-3.283v-8.276h4.349v8.164c0 .505.121.973.364 1.403.243.411.571.748.982 1.01.43.243.917.365 1.459.365.524 0 .991-.122 1.403-.365.43-.262.767-.599 1.01-1.01.243-.43.365-.898.365-1.403v-8.164h4.348v8.276c0 1.197-.281 2.292-.842 3.283-.561.972-1.374 1.749-2.44 2.328-1.048.561-2.32.842-3.816.842ZM132.414 30.153v-3.45h6.93c.187 0 .355-.038.505-.113.149-.093.271-.215.364-.364a.93.93 0 0 0 0-.982.9.9 0 0 0-.364-.337.934.934 0 0 0-.505-.14h-2.525c-.936 0-1.787-.15-2.553-.449a4.052 4.052 0 0 1-1.796-1.459c-.43-.673-.645-1.543-.645-2.609 0-.823.196-1.571.589-2.244a4.76 4.76 0 0 1 1.655-1.628 4.568 4.568 0 0 1 2.329-.617h6.929v3.479h-6.256a.97.97 0 0 0-.673.253.841.841 0 0 0-.253.617c0 .262.085.486.253.673a.97.97 0 0 0 .673.253h2.469c1.047 0 1.945.159 2.693.476.767.3 1.356.786 1.768 1.46.43.673.645 1.542.645 2.608 0 .842-.215 1.609-.645 2.3a4.613 4.613 0 0 1-1.684 1.656c-.692.412-1.477.617-2.356.617h-7.547ZM122.94 15.425c1.216 0 2.291.196 3.226.589a6.41 6.41 0 0 1 2.413 1.627 6.993 6.993 0 0 1 1.543 2.469c.355.935.533 1.973.533 3.114 0 1.421-.299 2.684-.898 3.787a6.471 6.471 0 0 1-2.412 2.553c-1.029.617-2.226.926-3.591.926-.58 0-1.132-.075-1.656-.224a5.312 5.312 0 0 1-1.402-.646 3.9 3.9 0 0 1-1.038-1.038h-.085v7.66h-4.348V23.223c0-1.59.318-2.965.954-4.124a6.666 6.666 0 0 1 2.693-2.694c1.16-.654 2.516-.981 4.068-.981Zm0 3.759c-.673 0-1.262.168-1.767.505-.487.318-.861.767-1.123 1.347-.261.56-.392 1.197-.392 1.907 0 .711.131 1.347.392 1.908.262.561.636 1.01 1.123 1.347.505.318 1.094.477 1.767.477.673 0 1.253-.16 1.739-.477a3.297 3.297 0 0 0 1.123-1.347c.28-.561.42-1.197.42-1.908 0-.71-.14-1.346-.42-1.907-.262-.58-.636-1.03-1.123-1.347-.486-.337-1.066-.505-1.739-.505ZM108.617 30.153V15.761h4.377v14.392h-4.377Zm2.188-16.019c-.692 0-1.29-.252-1.795-.757-.505-.505-.758-1.104-.758-1.796s.253-1.29.758-1.795c.505-.524 1.103-.786 1.795-.786s1.291.262 1.796.786c.505.505.757 1.103.757 1.795s-.252 1.29-.757 1.796c-.505.505-1.104.757-1.796.757ZM99.105 30.49c-1.477 0-2.805-.327-3.984-.982a7.462 7.462 0 0 1-2.805-2.693c-.673-1.141-1.01-2.422-1.01-3.844 0-1.44.337-2.721 1.01-3.843a7.462 7.462 0 0 1 2.805-2.693c1.179-.674 2.507-1.01 3.984-1.01 1.478 0 2.796.336 3.956 1.01a7.25 7.25 0 0 1 2.777 2.693c.692 1.122 1.038 2.403 1.038 3.843 0 1.422-.346 2.703-1.038 3.844a7.25 7.25 0 0 1-2.777 2.693c-1.178.655-2.497.982-3.956.982Zm0-3.787c.692 0 1.291-.169 1.796-.505a3.424 3.424 0 0 0 1.178-1.347c.281-.561.421-1.197.421-1.908 0-.692-.14-1.318-.421-1.88a3.423 3.423 0 0 0-1.178-1.346c-.505-.337-1.104-.505-1.796-.505s-1.3.168-1.823.505a3.428 3.428 0 0 0-1.179 1.347 4.144 4.144 0 0 0-.42 1.88c0 .71.14 1.346.42 1.907a3.43 3.43 0 0 0 1.179 1.347c.523.336 1.131.505 1.823.505ZM77.174 35.849v-3.732h7.181c.281 0 .515-.093.702-.28a.83.83 0 0 0 .28-.646v-3.17h-.084a6.59 6.59 0 0 1-1.206 1.094c-.412.3-.88.524-1.403.674a6.023 6.023 0 0 1-1.711.224c-1.272 0-2.413-.3-3.423-.898-.991-.617-1.777-1.468-2.357-2.553-.56-1.084-.841-2.319-.841-3.703 0-1.365.29-2.609.87-3.731.598-1.122 1.468-2.02 2.609-2.693 1.14-.674 2.534-1.01 4.18-1.01 1.571 0 2.927.327 4.068.982a6.624 6.624 0 0 1 2.693 2.72c.636 1.16.954 2.526.954 4.097v8.416c0 1.29-.383 2.31-1.15 3.058-.748.767-1.786 1.15-3.114 1.15h-8.248Zm4.825-9.483c.673 0 1.253-.15 1.74-.449a3.18 3.18 0 0 0 1.121-1.262 3.834 3.834 0 0 0 .393-1.74c0-.673-.13-1.29-.392-1.851-.262-.561-.636-1.001-1.123-1.319-.486-.337-1.066-.505-1.74-.505-.654 0-1.234.159-1.739.477-.486.318-.86.748-1.122 1.29-.261.543-.392 1.15-.392 1.824 0 .655.13 1.253.392 1.796.262.523.636.944 1.123 1.262.504.318 1.084.477 1.739.477ZM65.473 30.49c-1.477 0-2.805-.327-3.983-.982a7.46 7.46 0 0 1-2.806-2.693c-.673-1.141-1.01-2.422-1.01-3.844 0-1.44.337-2.721 1.01-3.843a7.46 7.46 0 0 1 2.806-2.693c1.178-.674 2.506-1.01 3.983-1.01 1.478 0 2.796.336 3.956 1.01a7.252 7.252 0 0 1 2.777 2.693c.692 1.122 1.038 2.403 1.038 3.843 0 1.422-.346 2.703-1.038 3.844a7.252 7.252 0 0 1-2.777 2.693c-1.178.655-2.497.982-3.956.982Zm0-3.787c.692 0 1.29-.169 1.796-.505a3.43 3.43 0 0 0 1.178-1.347c.28-.561.42-1.197.42-1.908 0-.692-.14-1.318-.42-1.88a3.429 3.429 0 0 0-1.178-1.346c-.505-.337-1.104-.505-1.796-.505s-1.3.168-1.823.505a3.428 3.428 0 0 0-1.179 1.347 4.145 4.145 0 0 0-.42 1.88c0 .71.14 1.346.42 1.907a3.43 3.43 0 0 0 1.179 1.347c.523.336 1.131.505 1.823.505ZM51.547 30.153c-1.216 0-2.282-.27-3.198-.813a5.763 5.763 0 0 1-2.132-2.16c-.505-.898-.758-1.89-.758-2.974V10.515h4.713v14.027c0 .45.16.842.477 1.179.318.336.71.505 1.178.505h5.19v3.927h-5.47Z"></path></svg>
            <svg id="logo-53" width="169" height="42" viewBox="0 0 169 42" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M50.8601 29.3532H62.8121V25.7532H55.1081V12.1932H50.8601V29.3532Z" class="cneutral" fill="#1A1414"></path> <path d="M69.8932 26.9532C68.1892 26.9532 67.3012 25.4652 67.3012 23.2332C67.3012 21.0012 68.1892 19.4892 69.8932 19.4892C71.5972 19.4892 72.5092 21.0012 72.5092 23.2332C72.5092 25.4652 71.5972 26.9532 69.8932 26.9532ZM69.9172 29.7372C73.8772 29.7372 76.4692 26.9292 76.4692 23.2332C76.4692 19.5372 73.8772 16.7292 69.9172 16.7292C65.9812 16.7292 63.3412 19.5372 63.3412 23.2332C63.3412 26.9292 65.9812 29.7372 69.9172 29.7372Z" class="cneutral" fill="#1A1414"></path> <path d="M83.3237 33.6012C85.1477 33.6012 86.7557 33.1932 87.8357 32.2332C88.8197 31.3452 89.4677 30.0012 89.4677 28.1532V17.0652H85.7237V18.3852H85.6757C84.9557 17.3532 83.8517 16.7052 82.2197 16.7052C79.1717 16.7052 77.0597 19.2492 77.0597 22.8492C77.0597 26.6172 79.6277 28.6812 82.3877 28.6812C83.8757 28.6812 84.8117 28.0812 85.5317 27.2652H85.6277V28.4892C85.6277 29.9772 84.9317 30.8412 83.2757 30.8412C81.9797 30.8412 81.3317 30.2892 81.1157 29.6412H77.3237C77.7077 32.2092 79.9397 33.6012 83.3237 33.6012ZM83.2997 25.7772C81.8357 25.7772 80.8757 24.5772 80.8757 22.7292C80.8757 20.8572 81.8357 19.6572 83.2997 19.6572C84.9317 19.6572 85.7957 21.0492 85.7957 22.7052C85.7957 24.4332 85.0037 25.7772 83.2997 25.7772Z" class="cneutral" fill="#1A1414"></path> <path d="M97.166 26.9532C95.462 26.9532 94.574 25.4652 94.574 23.2332C94.574 21.0012 95.462 19.4892 97.166 19.4892C98.87 19.4892 99.782 21.0012 99.782 23.2332C99.782 25.4652 98.87 26.9532 97.166 26.9532ZM97.19 29.7372C101.15 29.7372 103.742 26.9292 103.742 23.2332C103.742 19.5372 101.15 16.7292 97.19 16.7292C93.254 16.7292 90.614 19.5372 90.614 23.2332C90.614 26.9292 93.254 29.7372 97.19 29.7372Z" class="cneutral" fill="#1A1414"></path> <path d="M104.884 29.3532H108.796V17.0652H104.884V29.3532ZM104.884 15.3612H108.796V12.1932H104.884V15.3612Z" class="cneutral" fill="#1A1414"></path> <path d="M110.494 33.4092H114.406V28.0812H114.454C115.222 29.1132 116.35 29.7372 117.934 29.7372C121.15 29.7372 123.286 27.1932 123.286 23.2092C123.286 19.5132 121.294 16.7052 118.03 16.7052C116.35 16.7052 115.15 17.4492 114.31 18.5532H114.238V17.0652H110.494V33.4092ZM116.926 26.7132C115.246 26.7132 114.286 25.3452 114.286 23.3532C114.286 21.3612 115.15 19.8492 116.854 19.8492C118.534 19.8492 119.326 21.2412 119.326 23.3532C119.326 25.4412 118.414 26.7132 116.926 26.7132Z" class="cneutral" fill="#1A1414"></path> <path d="M129.655 29.7372C132.871 29.7372 135.247 28.3452 135.247 25.6572C135.247 22.5132 132.703 21.9612 130.543 21.6012C128.983 21.3132 127.591 21.1932 127.591 20.3292C127.591 19.5612 128.335 19.2012 129.295 19.2012C130.375 19.2012 131.119 19.5372 131.263 20.6412H134.863C134.671 18.2172 132.799 16.7052 129.319 16.7052C126.415 16.7052 124.015 18.0492 124.015 20.6412C124.015 23.5212 126.295 24.0972 128.431 24.4572C130.063 24.7452 131.551 24.8652 131.551 25.9692C131.551 26.7612 130.807 27.1932 129.631 27.1932C128.335 27.1932 127.519 26.5932 127.375 25.3692H123.679C123.799 28.0812 126.055 29.7372 129.655 29.7372Z" class="cneutral" fill="#1A1414"></path> <path d="M140.561 29.7132C142.265 29.7132 143.345 29.0412 144.233 27.8412H144.305V29.3532H148.049V17.0652H144.137V23.9292C144.137 25.3932 143.321 26.4012 141.977 26.4012C140.729 26.4012 140.129 25.6572 140.129 24.3132V17.0652H136.241V25.1292C136.241 27.8652 137.729 29.7132 140.561 29.7132Z" class="cneutral" fill="#1A1414"></path> <path d="M149.75 29.3532H153.662V22.4652C153.662 21.0012 154.382 19.9692 155.606 19.9692C156.782 19.9692 157.334 20.7372 157.334 22.0572V29.3532H161.246V22.4652C161.246 21.0012 161.942 19.9692 163.19 19.9692C164.366 19.9692 164.918 20.7372 164.918 22.0572V29.3532H168.83V21.3612C168.83 18.6012 167.438 16.7052 164.654 16.7052C163.07 16.7052 161.75 17.3772 160.79 18.8652H160.742C160.118 17.5452 158.894 16.7052 157.286 16.7052C155.51 16.7052 154.334 17.5452 153.566 18.8172H153.494V17.0652H149.75V29.3532Z" class="cneutral" fill="#1A1414"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6842 0.961929C31.946 0.961929 41.0755 10.0914 41.0755 21.3532C41.0755 32.6151 31.946 41.7446 20.6842 41.7446C9.42234 41.7446 0.292847 32.6151 0.292847 21.3532C0.292847 10.0914 9.42234 0.961929 20.6842 0.961929ZM40.2928 21.3532C40.2928 10.5237 31.5137 1.74455 20.6842 1.74455C19.8106 1.74455 18.9505 1.80167 18.1071 1.91238C18.652 1.86474 19.2034 1.84042 19.7606 1.84042C30.1088 1.84042 38.4977 10.2293 38.4977 20.5775C38.4977 30.9256 30.1088 39.3145 19.7606 39.3145C9.96366 39.3145 1.92284 31.7956 1.09401 22.2135C1.54426 32.6439 10.1428 40.9619 20.6842 40.9619C31.5137 40.9619 40.2928 32.1828 40.2928 21.3532ZM37.715 20.5775C37.715 10.6615 29.6766 2.62305 19.7606 2.62305C18.9555 2.62305 18.1627 2.67605 17.3856 2.77874C17.8641 2.73848 18.3482 2.71794 18.8371 2.71794C28.2717 2.71794 35.9199 10.3662 35.9199 19.8007C35.9199 29.2353 28.2717 36.8835 18.8371 36.8835C9.91648 36.8835 2.59287 30.0458 1.8215 21.3256C2.21369 30.8946 10.0953 38.5319 19.7606 38.5319C29.6766 38.5319 37.715 30.4934 37.715 20.5775ZM18.8371 3.50057C27.8394 3.50057 35.1373 10.7984 35.1373 19.8007C35.1373 28.803 27.8394 36.1008 18.8371 36.1008C10.0434 36.1008 2.87602 29.1372 2.54867 20.4235C3.25542 28.2885 9.86471 34.4524 17.9137 34.4524C26.434 34.4524 33.3412 27.5453 33.3412 19.0249C33.3412 10.5045 26.434 3.59741 17.9137 3.59741C17.4729 3.59741 17.0364 3.6159 16.605 3.65213C17.3348 3.5522 18.0799 3.50057 18.8371 3.50057ZM32.5585 19.0249C32.5585 10.9368 26.0018 4.38004 17.9137 4.38004C17.2303 4.38004 16.5578 4.42684 15.8994 4.51742C16.2589 4.48928 16.6223 4.47495 16.9891 4.47495C24.5959 4.47495 30.7624 10.6414 30.7624 18.2482C30.7624 25.8549 24.5959 32.0214 16.9891 32.0214C9.82947 32.0214 3.94576 26.5585 3.27885 19.5736C3.56738 27.4075 10.0092 33.6698 17.9137 33.6698C26.0018 33.6698 32.5585 27.1131 32.5585 19.0249ZM16.9891 5.25757C24.1636 5.25757 29.9797 11.0737 29.9797 18.2482C29.9797 25.4227 24.1636 31.2388 16.9891 31.2388C9.95594 31.2388 4.2282 25.6496 4.00526 18.6706C4.60739 24.8008 9.77718 29.5904 16.0656 29.5904C22.7588 29.5904 28.1846 24.1645 28.1846 17.4714C28.1846 10.7783 22.7588 5.35246 16.0656 5.35246C15.7587 5.35246 15.4544 5.36387 15.1532 5.38629C15.753 5.30145 16.3659 5.25757 16.9891 5.25757ZM27.402 17.4714C27.402 11.2105 22.3265 6.13509 16.0656 6.13509C15.4941 6.13509 14.9325 6.17738 14.3837 6.259C14.6342 6.24106 14.8871 6.23193 15.1422 6.23193C20.9211 6.23193 25.6059 10.9167 25.6059 16.6956C25.6059 22.4746 20.9211 27.1593 15.1422 27.1593C9.72697 27.1593 5.27257 23.0458 4.73324 17.773C4.89313 23.8945 9.90561 28.8078 16.0656 28.8078C22.3265 28.8078 27.402 23.7323 27.402 17.4714ZM15.1422 7.01456C20.4889 7.01456 24.8232 11.3489 24.8232 16.6956C24.8232 22.0424 20.4889 26.3767 15.1422 26.3767C9.86348 26.3767 5.57156 22.152 5.46317 16.8993C5.9508 21.3032 9.68475 24.7283 14.2187 24.7283C19.084 24.7283 23.0281 20.7842 23.0281 15.9189C23.0281 11.0536 19.084 7.10945 14.2187 7.10945C14.0326 7.10945 13.8479 7.11522 13.6647 7.12659C14.1464 7.05282 14.6398 7.01456 15.1422 7.01456ZM22.2455 15.9189C22.2455 11.4858 18.6518 7.89208 14.2187 7.89208C13.7735 7.89208 13.3368 7.92832 12.9113 7.99801C13.0381 7.99133 13.1657 7.98795 13.2942 7.98795C17.2458 7.98795 20.4493 11.1914 20.4493 15.1431C20.4493 19.0948 17.2458 22.2983 13.2942 22.2983C9.64023 22.2983 6.626 19.5593 6.19252 16.0225C6.24802 20.4079 9.8202 23.9457 14.2187 23.9457C18.6518 23.9457 22.2455 20.352 22.2455 15.9189ZM13.2942 8.77057C16.8136 8.77057 19.6667 11.6236 19.6667 15.1431C19.6667 18.6626 16.8136 21.5156 13.2942 21.5156C9.77471 21.5156 6.92163 18.6626 6.92163 15.1431C6.92163 15.1347 6.92165 15.1262 6.92168 15.1178C7.2881 17.7998 9.58806 19.8663 12.3707 19.8663C15.4082 19.8663 17.8706 17.4039 17.8706 14.3664C17.8706 11.3288 15.4082 8.86646 12.3707 8.86646C12.302 8.86646 12.2336 8.86771 12.1655 8.87021C12.5318 8.80474 12.909 8.77057 13.2942 8.77057ZM17.0879 14.3664C17.0879 11.7611 14.976 9.64908 12.3707 9.64908C9.7654 9.64908 7.6534 11.7611 7.6534 14.3664C7.6534 16.9716 9.7654 19.0836 12.3707 19.0836C14.976 19.0836 17.0879 16.9716 17.0879 14.3664Z" className="cneutral" fill="#1A1414"></path> </svg>
        </div>
    </div>
  )
}

export default Hero
