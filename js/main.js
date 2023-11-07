const templateModal = (data) => {
  let imgsHTML = "";

  data.images.forEach((img) => {
    imgsHTML += `<img src="${img}" alt="car" class="car__img" />`;
  });

  console.log(data);

  return `
    <div class="btn-close">
        <img src="./img/cross-mark-button.svg" alt="">
    </div>
    <div class="slider">
        <div class="image__wrapper">
          ${imgsHTML}
        </div>
        <div class="arrow__wrapper">
          <button class="button-left">
            <img src="./img/arrow.svg" alt="" class="arrow-left" />
          </button>
          <button class="button-rigth">
            <img src="./img/arrow.svg" alt="" class="arrow-rigth" />
          </button>
        </div>
      </div>

      <div class="car__descr">
        <div class="text__wrapper">
            <div class="car__name">${data.title}</div>
            <div class="car__price">$${data.price_per_day_usd} / день</div>
        </div>
        <div class="car__specifications">
          <div class="car__type">
            <div class="characteristic characteristic__type">
              <svg
                width="27"
                height="14"
                viewBox="0 0 27 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.2 5.30893L15.8571 1.02489C14.4 0.36896 12.7929 0 11.1857 0C9.85714 0 8.52857 0.245974 7.28571 0.696926C7.24286 0.696926 7.17857 0.717424 7.13571 0.737921L7.05 0.778916C7.00714 0.799414 6.96429 0.819913 6.92143 0.84041L2.85 2.41874C1.11429 3.09517 0 4.6735 0 6.45681V10.2899C0 10.6384 0.278571 10.9048 0.642857 10.9048H3.27857C3.57857 12.6471 5.16429 13.9795 7.07143 13.9795C9.19286 13.9795 10.9286 12.3192 10.9286 10.2899C10.9286 8.26062 9.19286 6.60029 7.07143 6.60029C5.16429 6.60029 3.57857 7.93265 3.27857 9.67496H1.28571V6.45681C1.28571 5.18595 2.07857 4.03807 3.32143 3.56662L6.92143 2.17277C7.84286 4.20205 9.96429 5.5754 12.3214 5.5754H16.5643C16.9286 5.5754 17.2071 5.30893 17.2071 4.96047C17.2071 4.61201 16.9286 4.34553 16.5643 4.34553H12.3214C10.5 4.34553 8.85 3.30015 8.12143 1.72182C9.10714 1.39385 10.1357 1.22987 11.2071 1.22987C12.6214 1.22987 14.0357 1.53733 15.3214 2.13177L24.6429 6.41581C25.2857 6.72328 25.7143 7.35871 25.7143 8.05564V9.69546H24.7929C24.4929 7.95315 22.9071 6.62079 21 6.62079C18.8786 6.62079 17.1429 8.28111 17.1429 10.3104C17.1429 12.3397 18.8786 14 21 14C22.9071 14 24.4929 12.6676 24.7929 10.9253H26.3571C26.7214 10.9253 27 10.6589 27 10.3104V8.03514C27 6.88726 26.2929 5.80088 25.2 5.30893ZM7.07143 7.83016C8.48571 7.83016 9.64286 8.93704 9.64286 10.2899C9.64286 11.6428 8.48571 12.7496 7.07143 12.7496C5.65714 12.7496 4.5 11.6428 4.5 10.2899C4.5 8.93704 5.65714 7.83016 7.07143 7.83016ZM21 12.7496C19.5857 12.7496 18.4286 11.6428 18.4286 10.2899C18.4286 8.93704 19.5857 7.83016 21 7.83016C22.4143 7.83016 23.5714 8.93704 23.5714 10.2899C23.5714 11.6428 22.4143 12.7496 21 12.7496Z"
                  fill="#606680" />
              </svg>
              <span>${data.type} </span>
            </div>
          </div>
          <div class="car__specifications-other">
            <div class="characteristic">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.66667 0V2H1.77778C0.8 2 0 2.9 0 4V18C0 19.1 0.8 20 1.77778 20H14.2222C15.2 20 16 19.1 16 18V4C16 2.9 15.2 2 14.2222 2H13.3333V0H11.5556V2H4.44444V0H2.66667ZM1.77778 4H2.66667H4.44444H11.5556H13.3333H14.2222V6H1.77778V4ZM1.77778 8H14.2222V18H1.77778V8Z"
                  fill="#606680" />
              </svg>
              <span>${data.year}</span>
            </div>
            <div class="characteristic">
              <svg
                width="25"
                height="33"
                viewBox="0 0 25 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.62 7.61655C4.26 7.61655 5.2 6.15655 5.2 4.12655C5.2 1.87655 4.11 0.626549 2.62 0.626549C0.99 0.626549 0.04 2.08655 0.04 4.12655C0.04 6.36655 1.13 7.61655 2.62 7.61655ZM2.62 6.83655C1.61 6.83655 0.9 5.86655 0.9 4.12655C0.9 2.47655 1.53 1.40655 2.62 1.40655C3.64 1.40655 4.34 2.37655 4.34 4.12655C4.34 5.76655 3.72 6.83655 2.62 6.83655ZM6.29023 4.87655H9.25023V4.07655H6.29023V4.87655ZM11.1284 7.55655H11.9684V0.686549H11.2684L9.34844 2.10655L9.75844 2.73655L11.1284 1.69655V7.55655ZM15.9891 7.61655C17.6291 7.61655 18.5691 6.15655 18.5691 4.12655C18.5691 1.87655 17.4791 0.626549 15.9891 0.626549C14.3591 0.626549 13.4091 2.08655 13.4091 4.12655C13.4091 6.36655 14.4991 7.61655 15.9891 7.61655ZM15.9891 6.83655C14.9791 6.83655 14.2691 5.86655 14.2691 4.12655C14.2691 2.47655 14.8991 1.40655 15.9891 1.40655C17.0091 1.40655 17.7091 2.37655 17.7091 4.12655C17.7091 5.76655 17.0891 6.83655 15.9891 6.83655ZM22.2294 7.61655C23.8694 7.61655 24.8094 6.15655 24.8094 4.12655C24.8094 1.87655 23.7194 0.626549 22.2294 0.626549C20.5994 0.626549 19.6494 2.08655 19.6494 4.12655C19.6494 6.36655 20.7394 7.61655 22.2294 7.61655ZM22.2294 6.83655C21.2194 6.83655 20.5094 5.86655 20.5094 4.12655C20.5094 2.47655 21.1394 1.40655 22.2294 1.40655C23.2494 1.40655 23.9494 2.37655 23.9494 4.12655C23.9494 5.76655 23.3294 6.83655 22.2294 6.83655Z"
                  fill="#606680" />
                <path
                  d="M9.69051 12V13.68H14.7084V12H9.69051ZM19.4911 13.9162L18.2889 15.1237L18.9422 15.78L18.0798 16.6725C16.4856 15.337 14.4307 14.52 12.1994 14.52C7.1293 14.52 3 18.6675 3 23.76C3 28.8525 7.1293 33 12.1994 33C17.2696 33 21.3989 28.8525 21.3989 23.76C21.3989 21.5189 20.5855 19.455 19.2558 17.8537L20.1444 16.9875L20.7978 17.6437L22 16.4362L19.4911 13.9162ZM12.1994 16.2C16.3647 16.2 19.7263 19.5764 19.7263 23.76C19.7263 27.9436 16.3647 31.32 12.1994 31.32C8.03422 31.32 4.67263 27.9436 4.67263 23.76C4.67263 19.5764 8.03422 16.2 12.1994 16.2ZM8.61898 18.9562L7.41678 20.1637L10.5791 23.34C10.5432 23.4745 10.5268 23.6156 10.5268 23.76C10.5268 24.6886 11.2749 25.44 12.1994 25.44C13.124 25.44 13.8721 24.6886 13.8721 23.76C13.8721 22.8314 13.124 22.08 12.1994 22.08C12.0557 22.08 11.9152 22.0964 11.7813 22.1325L8.61898 18.9562Z"
                  fill="#606680" />
              </svg>
              <span>${data["0_100"]}</span>
            </div>
            <div class="characteristic">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.5 0C4.70996 0 0 4.87016 0 10.8571C0 13.9743 1.2749 16.7699 3.30859 18.7455L3.58203 19H17.418L17.6914 18.7455C19.7251 16.7699 21 13.9743 21 10.8571C21 4.87016 16.29 0 10.5 0ZM10.5 1.80952C15.3433 1.80952 19.25 5.84914 19.25 10.8571C19.25 13.3488 18.228 15.5541 16.6523 17.1905H4.34766C2.77197 15.5541 1.75 13.3488 1.75 10.8571C1.75 5.84914 5.65674 1.80952 10.5 1.80952ZM10.5 2.71429C10.0181 2.71429 9.625 3.12072 9.625 3.61905C9.625 4.11737 10.0181 4.52381 10.5 4.52381C10.9819 4.52381 11.375 4.11737 11.375 3.61905C11.375 3.12072 10.9819 2.71429 10.5 2.71429ZM7 3.6756C6.51807 3.6756 6.125 4.08203 6.125 4.58036C6.125 5.07868 6.51807 5.48512 7 5.48512C7.48193 5.48512 7.875 5.07868 7.875 4.58036C7.875 4.08203 7.48193 3.6756 7 3.6756ZM14 3.6756C13.5181 3.6756 13.125 4.08203 13.125 4.58036C13.125 5.07868 13.5181 5.48512 14 5.48512C14.4819 5.48512 14.875 5.07868 14.875 4.58036C14.875 4.08203 14.4819 3.6756 14 3.6756ZM4.42969 6.33333C3.94775 6.33333 3.55469 6.73977 3.55469 7.2381C3.55469 7.73642 3.94775 8.14286 4.42969 8.14286C4.91162 8.14286 5.30469 7.73642 5.30469 7.2381C5.30469 6.73977 4.91162 6.33333 4.42969 6.33333ZM16.5703 6.33333C16.3994 6.33333 16.2422 6.38635 16.1055 6.4747L11.375 9.30208C11.1187 9.14658 10.8179 9.04762 10.5 9.04762C9.53271 9.04762 8.75 9.85696 8.75 10.8571C8.75 11.8573 9.53271 12.6667 10.5 12.6667C11.4673 12.6667 12.25 11.8573 12.25 10.8571L16.8984 8.05804C17.2129 7.9202 17.4453 7.61272 17.4453 7.2381C17.4453 6.73977 17.0522 6.33333 16.5703 6.33333ZM3.5 9.95238C3.01807 9.95238 2.625 10.3588 2.625 10.8571C2.625 11.3555 3.01807 11.7619 3.5 11.7619C3.98193 11.7619 4.375 11.3555 4.375 10.8571C4.375 10.3588 3.98193 9.95238 3.5 9.95238ZM17.5 9.95238C17.0181 9.95238 16.625 10.3588 16.625 10.8571C16.625 11.3555 17.0181 11.7619 17.5 11.7619C17.9819 11.7619 18.375 11.3555 18.375 10.8571C18.375 10.3588 17.9819 9.95238 17.5 9.95238ZM4.42969 13.5714C3.94775 13.5714 3.55469 13.9779 3.55469 14.4762C3.55469 14.9745 3.94775 15.381 4.42969 15.381C4.91162 15.381 5.30469 14.9745 5.30469 14.4762C5.30469 13.9779 4.91162 13.5714 4.42969 13.5714ZM16.5703 13.5714C16.0884 13.5714 15.6953 13.9779 15.6953 14.4762C15.6953 14.9745 16.0884 15.381 16.5703 15.381C17.0522 15.381 17.4453 14.9745 17.4453 14.4762C17.4453 13.9779 17.0522 13.5714 16.5703 13.5714Z"
                  fill="#606680" />
              </svg>
              <span>${data.max_speed}</span>
            </div>
            <div class="characteristic">
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0C4.43273 0 2.33333 2.20845 2.33333 4.90909C2.33333 6.50071 3.05946 7.92294 4.18056 8.82102C3.69141 9.04794 3.24175 9.33239 2.81944 9.66477L0 7.54261V9.53693L1.65278 10.7898C0.619792 12.0746 0 13.7365 0 15.5455V18H1.55556V15.5455C1.55556 14.0849 2.06597 12.7457 2.91667 11.7358L11.2049 18H14V15.5455C14 12.5444 12.2773 9.9652 9.81944 8.82102C10.9405 7.92294 11.6667 6.50071 11.6667 4.90909C11.6667 2.20845 9.56727 0 7 0ZM7 1.63636C8.72873 1.63636 10.1111 3.09055 10.1111 4.90909C10.1111 6.72763 8.72873 8.18182 7 8.18182C5.27127 8.18182 3.88889 6.72763 3.88889 4.90909C3.88889 3.09055 5.27127 1.63636 7 1.63636ZM7 9.81818C10.0169 9.81818 12.4444 12.3718 12.4444 15.5455V16.9261L4.15625 10.6619C4.98568 10.1282 5.95486 9.81818 7 9.81818Z"
                  fill="#606680" />
              </svg>
              <span>${data.persons}</span>
            </div>
            <div class="characteristic">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.23762 0.00302962C7.89095 0.0138209 7.53408 0.0542884 7.17721 0.110942H7.15682C3.68244 0.712556 0.868272 3.61001 0.162181 7.27635C-0.0493918 8.32041 -0.0366459 9.29432 0.101003 10.2547C0.106102 10.2574 0.101003 10.2709 0.101003 10.2763C0.315125 11.8977 2.3034 12.6072 3.42499 11.4202C4.22794 10.5704 5.41581 10.5704 6.21876 11.4202C7.02172 12.27 7.02172 13.5272 6.21876 14.377C5.09717 15.564 5.76758 17.6683 7.29957 17.895C7.30467 17.895 7.31741 17.8896 7.31996 17.895C8.21978 18.0406 9.1349 18.0487 10.1137 17.8302C10.1214 17.8302 10.1265 17.8302 10.1341 17.8302C13.6085 17.145 16.3386 14.0964 16.9045 10.4274V10.4058C17.6437 5.12889 13.9985 0.521011 9.25725 0.0461947C8.91823 0.0111233 8.5843 -0.00776165 8.23762 0.00302962ZM8.25802 1.38431C8.55371 1.37352 8.84685 1.37892 9.1349 1.4059C13.1777 1.79708 16.2519 5.69813 15.6197 10.2116C15.143 13.3033 12.8005 15.904 9.88942 16.4705H9.86903C9.03548 16.6594 8.26566 16.6621 7.4831 16.5353C6.9478 16.4651 6.70054 15.8311 7.13643 15.3698C8.42116 14.0101 8.42116 11.8087 7.13643 10.449C5.8517 9.08928 3.77166 9.08928 2.48693 10.449C2.05104 10.9103 1.45201 10.6486 1.38573 10.0821C1.26593 9.25385 1.26848 8.43911 1.44691 7.55692C2.04594 4.45713 4.43951 1.97514 7.36074 1.47064C7.66663 1.42208 7.96232 1.3951 8.25802 1.38431ZM7.1976 2.78718C6.47622 2.78718 5.89248 3.40498 5.89248 4.16846C5.89248 4.93195 6.47622 5.54975 7.1976 5.54975C7.91899 5.54975 8.50273 4.93195 8.50273 4.16846C8.50273 3.40498 7.91899 2.78718 7.1976 2.78718ZM11.7655 4.16846C11.0441 4.16846 10.4604 4.78626 10.4604 5.54975C10.4604 6.31323 11.0441 6.93103 11.7655 6.93103C12.4869 6.93103 13.0707 6.31323 13.0707 5.54975C13.0707 4.78626 12.4869 4.16846 11.7655 4.16846ZM3.9348 5.54975C3.21341 5.54975 2.62968 6.16755 2.62968 6.93103C2.62968 7.69451 3.21341 8.31231 3.9348 8.31231C4.65619 8.31231 5.23992 7.69451 5.23992 6.93103C5.23992 6.16755 4.65619 5.54975 3.9348 5.54975ZM13.0707 9.00295C12.3493 9.00295 11.7655 9.62075 11.7655 10.3842C11.7655 11.1477 12.3493 11.7655 13.0707 11.7655C13.792 11.7655 14.3758 11.1477 14.3758 10.3842C14.3758 9.62075 13.792 9.00295 13.0707 9.00295ZM10.4604 12.4562C9.73902 12.4562 9.15529 13.074 9.15529 13.8374C9.15529 14.6009 9.73902 15.2187 10.4604 15.2187C11.1818 15.2187 11.7655 14.6009 11.7655 13.8374C11.7655 13.074 11.1818 12.4562 10.4604 12.4562Z"
                  fill="#606680" />
              </svg>
              <span>${data.color}</span>
            </div>
            <div class="characteristic">
              <svg
                width="24"
                height="17"
                viewBox="0 0 24 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.82768 1.44217H7.3528V0.16217H13.5999V1.44217H11.125V2.56544H13.8684L16.0015 4.66829H18.3624V6.17033H19.8077V4.36788H22.4009L24 5.94426V14.8862L22.7057 16.1622H19.8077V13.7589H18.3624V16.1622H10.284L7.08429 13.0079H2.74261V9.02748H1.2973V12.3679H0V4.40707H1.2973V7.74748H2.74261V3.76707H5.86535L7.08429 2.56544H9.82768V1.44217ZM7.62132 3.84544L6.40238 5.04707H4.03991V11.7279H7.62132L10.821 14.8822H17.0651V12.4789H21.105V14.8822H22.1686L22.7027 14.3557V6.47478L21.8639 5.64788H21.105V7.45033H17.0651V5.94829H15.4645L13.3313 3.84544H7.62132Z"
                  fill="#606680" />
              </svg>
              <span>${data.type_of_engine}</span>
            </div>
            <div class="characteristic">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.30705 1.76213C2.35466 1.76213 1.5999 2.51869 1.5999 3.43079C1.5999 4.34289 2.35466 5.09945 3.30705 5.09945C4.25943 5.09945 5.01419 4.34289 5.01419 3.43079C5.01419 2.51869 4.25943 1.76213 3.30705 1.76213ZM0.399902 3.43079C0.399902 1.837 1.71103 0.562134 3.30705 0.562134C4.90306 0.562134 6.21419 1.837 6.21419 3.43079C6.21419 4.16187 5.93831 4.82584 5.48562 5.33045V8.32333H7.68562V3.19198C7.68562 1.99386 8.67055 1.03975 9.86419 1.03975C11.0578 1.03975 12.0428 1.99386 12.0428 3.19198V8.32333H14.2428V3.19198C14.2428 1.99386 15.2277 1.03975 16.4213 1.03975C17.615 1.03975 18.5999 1.99386 18.5999 3.19198V15.6099C18.5999 16.808 17.615 17.7621 16.4213 17.7621C15.2277 17.7621 14.2428 16.808 14.2428 15.6099V12.1502H12.0428V15.6099C12.0428 16.808 11.0578 17.7621 9.86419 17.7621C8.67055 17.7621 7.68562 16.808 7.68562 15.6099V12.1502H5.48562V15.6099C5.48562 16.808 4.50068 17.7621 3.30705 17.7621C2.11341 17.7621 1.12847 16.808 1.12847 15.6099V5.33045C0.675775 4.82584 0.399902 4.16187 0.399902 3.43079ZM2.32847 6.13256V15.6099C2.32847 16.1263 2.75704 16.5621 3.30705 16.5621C3.85705 16.5621 4.28562 16.1263 4.28562 15.6099V10.9502H8.88562V15.6099C8.88562 16.1263 9.31418 16.5621 9.86419 16.5621C10.4142 16.5621 10.8428 16.1263 10.8428 15.6099V10.9502H15.4428V15.6099C15.4428 16.1263 15.8713 16.5621 16.4213 16.5621C16.9713 16.5621 17.3999 16.1263 17.3999 15.6099V3.19198C17.3999 2.67555 16.9713 2.23975 16.4213 2.23975C15.8713 2.23975 15.4428 2.67555 15.4428 3.19198V9.52333H10.8428V3.19198C10.8428 2.67555 10.4142 2.23975 9.86419 2.23975C9.31418 2.23975 8.88562 2.67555 8.88562 3.19198V9.52333H4.28562V6.13256C3.97934 6.24066 3.64976 6.29945 3.30705 6.29945C2.96433 6.29945 2.63475 6.24066 2.32847 6.13256Z"
                  fill="#606680" />
              </svg>
              <span>${data.korobka}</span>
            </div>
            <div class="characteristic">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.771484 9.16215H0.769531C0.945129 9.4647 1.19696 9.71586 1.5 9.89067V12.1622H3.5V9.89262C3.80255 9.71702 4.05371 9.46519 4.22852 9.16215H12.7695C12.9451 9.4647 13.197 9.71586 13.5 9.89067V12.1622H15.5V9.89262C15.8038 9.71721 16.0562 9.46501 16.2316 9.16124C16.4072 8.85752 16.3993 8.72057 16.399 8.54669C16.399 8.39053 16.4067 8.20447 16.2311 7.90113C16.0557 7.59778 15.8035 7.34583 15.5 7.1706V4.89911H13.5V7.16864C13.1974 7.34424 12.9463 7.59607 12.7715 7.89911H4.23047C4.05487 7.59656 3.80304 7.3454 3.5 7.1706V4.89911H1.5V7.16864C1.19745 7.34424 0.946289 7.59607 0.771484 7.89911V9.16215Z"
                  fill="#606680" />
                <path
                  d="M0.5 1.04669C0.5 0.770691 0.723999 0.546692 1 0.546692H4C4.276 0.546692 4.5 0.770691 4.5 1.04669V2.04669C4.5 2.32269 4.276 2.54669 4 2.54669H1C0.723999 2.54669 0.5 2.32269 0.5 2.04669V1.04669Z"
                  fill="#606680" />
                <path
                  d="M12.5 1.04669C12.5 0.770691 12.724 0.546692 13 0.546692H16C16.276 0.546692 16.5 0.770691 16.5 1.04669V2.04669C16.5 2.32269 16.276 2.54669 16 2.54669H13C12.724 2.54669 12.5 2.32269 12.5 2.04669V1.04669Z"
                  fill="#606680" />
                <path
                  d="M0.5 14.6622C0.5 14.3862 0.723999 14.1622 1 14.1622H4C4.276 14.1622 4.5 14.3862 4.5 14.6622V15.6622C4.5 15.9382 4.276 16.1622 4 16.1622H1C0.723999 16.1622 0.5 15.9382 0.5 15.6622V14.6622Z"
                  fill="#606680" />
                <path
                  d="M12.5 14.6622C12.5 14.3862 12.724 14.1622 13 14.1622H16C16.276 14.1622 16.5 14.3862 16.5 14.6622V15.6622C16.5 15.9382 16.276 16.1622 16 16.1622H13C12.724 16.1622 12.5 15.9382 12.5 15.6622V14.6622Z"
                  fill="#606680" />
              </svg>
              <span>${data.privod}</span>
            </div>
            <div class="characteristic">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.57143 0C2.39397 0 1.42857 0.98768 1.42857 2.19231V17.5385H0V19H15.7143V17.5385H14.2857V10.2308H15C15.3962 10.2308 15.7143 10.5562 15.7143 10.9615V13.8846C15.7143 14.8951 16.4565 15.6202 17.3661 15.8714C17.5 15.997 17.673 16.0712 17.8571 16.0769C19.0346 16.0769 20 15.0892 20 13.8846V6.02885C20 5.91466 19.9721 5.80048 19.9163 5.69772L17.0592 0.0342555L15.798 0.696515L17.1429 3.36839V5.84615L18.5714 8.76923V13.8846C18.5714 14.29 18.2533 14.6154 17.8571 14.6154C17.4609 14.6154 17.1429 14.29 17.1429 13.8846V10.9615C17.1429 9.95102 16.4007 9.22596 15.4911 8.97476C15.3571 8.84916 15.1842 8.77494 15 8.76923H14.2857V2.19231C14.2857 0.98768 13.3203 0 12.1429 0H3.57143ZM3.57143 1.46154H12.1429C12.5446 1.46154 12.8571 1.78125 12.8571 2.19231V17.5385H2.85714V2.19231C2.85714 1.78125 3.16964 1.46154 3.57143 1.46154ZM4.28571 2.92308V8.76923H11.4286V2.92308H4.28571ZM5.71429 4.38462H10V7.30769H5.71429V4.38462Z"
                  fill="#606680" />
              </svg>
              <span>${data.gas_type}</span>
            </div>
          </div>
        </div>
        <div class="contacts">
          <div class="social__wrapper">
            <a class="btn-telegram" href="https://t.me/zeportus" target="_blank">
              <img src="./img/telegram-modal.svg" alt="telegram" />
            </a>
            <a class="btn-whatsapp" href="https://wa.me/79265723052" target="_blank">
              <img src="./img/whatsapp-modal.svg" alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>`;
};

const templateCard = (data, id) => {
  return `<div class="car-section__card" 
    data-type="${data.type[0].toUpperCase() + data.type.substr(1).toLowerCase()}" 
    data-persons=${data.persons} 
    data-name="${data.title}" 
    data-price="${data.price_per_day_usd}" 
    data-id="${id}" 
    data-month="${data.monthly_rent}"
  >
        <div class="car-section__image">
          <img src=${data.preview_img} alt="cardcar" />
        </div>
        <div class="car-section__cardinfo">
          <div class="car-section__leftinfo">
            <h2 data-value="name" class="car_name">${data.title}</h2>
            <p data-value="class" class="car_class">${
              data.type[0].toUpperCase() + data.type.substr(1).toLowerCase()
            }</p>
            <p data-value="horsepower">${data.max_speed} km/h</p>
            <p data-value="v">2.0 л</p>
            <p data-value="0-100">0-100: ${data["0_100"]}</p>
          </div>
          <div class="car-section__rightinfo">
            <div class="car-section__maxpassengers">
              <p class="car_max_passengers">${data.persons}</p>
              <img src="img/users.svg" alt="maxpassengers" />
            </div>
            <div class="car-section__carprice">
              <button>
                <span class="carprice__arend">Арендовать</span>
                <span class="carprice__price">$${
                  data.monthly_rent
                    ? data.price_per_month_usd
                    : data.price_per_day_usd
                } / ${data.monthly_rent ? "месяц" : "день"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>`;
};

// Get data
const getData = async () => {
  const res = await fetch("https://goldensandsdubai.ru:8080/cars");
  const obj = res.json();
  return obj;
};

const getCarById = async (id) => {
  const res = await fetch(`https://goldensandsdubai.ru:8080/car/${id}`);
  const obj = res.json();
  return obj;
};

const getFilterOptions = async () => {
  const res = await fetch(`https://goldensandsdubai.ru:8080/filter_options`);
  const obj = res.json();
  return obj;
};

const getContacts = async () => {
  const res = await fetch(`https://goldensandsdubai.ru:8080/options`);
  const obj = res.json();
  return obj;
}

const createCards = (data) => {
  let html = "";

  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      html += templateCard(data[i]);
    }
  } else {
    for (let key in data) {
      const element = data[key];

      html += templateCard(element, key);
    }
  }

  return html;
};

getFilterOptions().then((data) => {
  const selectClass = document.querySelector(".class");
  const selectPassengers = document.querySelector(".passengers");
  let optionsTypeHTML = '<option value="all" data-filter="all">Класс</option>';
  let optionsPersonsHTML =
    '<option value="all" data-filter="all">Количество пассажиров</option>';

  data.types.forEach((type) => {
    optionsTypeHTML += `<option value="${type}" data-filter=".${type}">${type}</option>`;
  });

  data.persons.forEach((type) => {
    optionsPersonsHTML += `<option value="${type}" data-filter=".${type}">${type}</option>`;
  });

  selectClass.innerHTML = optionsTypeHTML;
  selectPassengers.innerHTML = optionsPersonsHTML;
});

const wrapperCars = document.querySelector(".car-section__box");
getData().then((data) => {
  var curData = data;
  const html = createCards(curData);

  wrapperCars.innerHTML = html;

  Modal();

  // Filters
  const serchInput = document.querySelector("#search__car");
  const selectClass = document.querySelector(".class");
  const selectPassengers = document.querySelector(".passengers");
  const selectSortPrice = document.querySelector(".sortprice");
  const selectPriodRental = document.querySelector(".rental-period");

  const filterCards = () => {
    const serchInput = document.querySelector("#search__car").value;
    const selectClass = document.querySelector(".class").value;
    const selectPassengers = document.querySelector(".passengers").value;
    const selectPriodRental = document.querySelector(".rental-period").value;

    console.log(selectPriodRental);

    const carCards = document.querySelectorAll(".car-section__card");

    carCards.forEach((car) => {
      const name = car.dataset.name;
      const type = car.dataset.type;
      const persons = car.dataset.persons;
      const period = car.dataset.month === "true" ? "month" : "day";

      console.log(name, period);

      let shouldShow = true;

      if (
        selectClass &&
        !type.toLowerCase().includes(selectClass.toLowerCase()) &&
        selectClass !== "all"
      ) {
        shouldShow = false;
      }

      if (
        selectPassengers &&
        persons !== selectPassengers &&
        selectPassengers !== "all"
      ) {
        shouldShow = false;
      }

      if (name && !name.toLowerCase().includes(serchInput.toLowerCase())) {
        shouldShow = false;
      }

      if (
        selectPriodRental &&
        period !== selectPriodRental &&
        selectPriodRental !== "all"
      ) {
        shouldShow = false;
      }

      if (shouldShow) {
        car.style.display = "flex";
      } else {
        car.style.display = "none";
      }
    });
  };

  function compareByPrice(a, b) {
    // Извлеките цены из элементов
    const priceA = a.dataset.price;
    const priceB = b.dataset.price;

    // Сравните цены
    return priceB - priceA;
  }

  const carCards = document.querySelectorAll(".car-section__card");
  const carCardArray = Array.from(carCards);
  const carStandardArray = Array.from(carCards);
  const sectionBox = document.querySelector(".car-section__box");

  carCardArray.sort(compareByPrice);
  const carSortedArray = Array.from(carCardArray);
  carCardArray.sort(compareByPrice).reverse();
  const carReversedArray = Array.from(carCardArray);

  function sort() {
    let carArray = [];
    sectionBox.innerHTML = "";

    if (selectSortPrice.value == "up") {
      carArray = carSortedArray;
    } else if (selectSortPrice.value == "down") {
      carArray = carReversedArray;
    } else {
      carArray = carStandardArray;
    }

    carArray.forEach((carCard) => {
      sectionBox.appendChild(carCard);
    });
  }

  serchInput.addEventListener("input", filterCards);

  selectClass.addEventListener("change", filterCards);

  selectPassengers.addEventListener("change", filterCards);

  selectPriodRental.addEventListener("change", filterCards);

  selectSortPrice.addEventListener("change", sort);
});

// Burger menu
const menubtn = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

menubtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Modal
const Modal = () => {
  const carCards = document.querySelectorAll(".car-section__card");
  const bgModal = document.querySelector(".modal-background");
  const modal = document.querySelector(".modal");

  bgModal.addEventListener("click", (e) => {
    if (e.target === bgModal) {
      document.body.classList.remove("no-scroll");
      bgModal.classList.remove("show_modal");
    }
  });

  carCards.forEach((card, id) => {
    card.addEventListener("click", () => {
      const id = card.dataset.id;
      console.log(id);
      getCarById(id).then((data) => {
        const modalHTML = templateModal(data);

        if (modal.classList.contains("show_modal")) {
          bgModal.classList.remove("show_modal");
        } else {
          modal.innerHTML = modalHTML;

          bgModal.classList.add("show_modal");
          document.body.classList.add("no-scroll");
        }

        // Slider
        const images = document.querySelectorAll(".car__img");
        const arrowLeft = document.querySelector(".button-left");
        const arrowRigth = document.querySelector(".button-rigth");
        let initialActiveImg = 0;

        const show = (index) => {
          images[initialActiveImg]?.classList?.remove("active");
          images[index]?.classList?.add("active");
          initialActiveImg = index;
        };

        show(initialActiveImg);

        arrowLeft?.addEventListener("click", () => {
          const index =
            initialActiveImg - 1 < 0 ? images.length - 1 : initialActiveImg - 1;

          show(index);
        });

        arrowRigth?.addEventListener("click", () => {
          const index =
            initialActiveImg + 1 > images.length - 1 ? 0 : initialActiveImg + 1;

          show(index);
        });
      });
    });
  });
};

// Валидаци формы
const phone = document.querySelector("#phone");
window.intlTelInput(phone, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
  separateDialCode: true,
  preferredCountries: ["ru"],
});

// Отправка формы
const form = document.querySelector(".contacts_form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.querySelector("[name=name]");
  const phone = form.querySelector("[name=phone]");
  const message = form.querySelector("[name=message]");

  const data = {
    name: name.value,
    phone: phone.value,
    message: message.value,
  };

  fetch("http://goldensandsdubai.ru:8080/send_message", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(() => {
    const btn = document.querySelector(".btn_submit");
    btn.textContent = "Форма отправлена";

    setTimeout(() => {
      btn.textContent = "Отправить";
    }, 5000);

    name.value = "";
    phone.value = "";
    message.value = "";
  });
});

// Плавный скрол
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


// Параметры для связи
const templateContacts = (data) => {
  return `
    <a href="tel:${data.phone}">${data.phone}</a>
    <a href="mailto:${data.email}">${data.email}</a>
  `
}

const templateWeInMessangers = (data) => {
  return `
      <a href="https://t.me/${data.telegram}" target="_blank">
        <img src="img/telegram.svg" alt="telegram"/>
      </a>
      <a href="https://wa.me/${data.whatsapp}" target="_blank">
        <img src="img/whatsapp.svg" alt="whatsapp"/>
      </a>
  `
}

getContacts().then((data) => {
  console.log(data);
  const contactsWrapper = document.querySelector(".contacts-section__info");
  const tgAndWaWrapper = document.querySelectorAll(".contacts-section__messenger");

  contactsWrapper.innerHTML = templateContacts(data);
  tgAndWaWrapper.forEach((item) => {
    item.innerHTML = templateWeInMessangers(data);
  })
})
