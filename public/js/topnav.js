const createtopNav = () => {
    let nav = document.querySelector('#navbar');

    nav.innerHTML = `
    <div class="navbar-brand">
    <span onclick="toggleNav()">
        <i class="iconoir-menu" id="sidetoggle"></i>
    </span>
    <a href="/">
        <svg id="logotop" width="145" height="20" viewBox="0 0 145 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.62 1.6C7.84667 1.6 8.92667 1.79333 9.86 2.18C10.8067 2.55333 11.6267 3.10667 12.32 3.84L10.66 6.06C10.0867 5.46 9.46667 5.01333 8.8 4.72C8.14667 4.41333 7.4 4.26 6.56 4.26C6.06667 4.26 5.66667 4.31333 5.36 4.42C5.05333 4.52667 4.83333 4.67333 4.7 4.86C4.56667 5.04667 4.5 5.26 4.5 5.5C4.5 5.78 4.62667 6.02 4.88 6.22C5.14667 6.40667 5.57333 6.56667 6.16 6.7L8.38 7.2C9.7 7.50667 10.6667 7.95333 11.28 8.54C11.8933 9.12667 12.2 9.90667 12.2 10.88C12.2 11.8133 11.96 12.6067 11.48 13.26C11 13.9 10.34 14.3867 9.5 14.72C8.66 15.04 7.7 15.2 6.62 15.2C5.74 15.2 4.9 15.1067 4.1 14.92C3.3 14.72 2.58 14.44 1.94 14.08C1.3 13.72 0.76 13.3067 0.32 12.84L1.98 10.54C2.31333 10.9267 2.72 11.2733 3.2 11.58C3.69333 11.8733 4.22667 12.1067 4.8 12.28C5.38667 12.4533 5.98 12.54 6.58 12.54C7.04667 12.54 7.43333 12.4933 7.74 12.4C8.06 12.3067 8.29333 12.1667 8.44 11.98C8.58667 11.7933 8.66 11.5733 8.66 11.32C8.66 11.04 8.56 10.8067 8.36 10.62C8.16 10.42 7.78 10.2533 7.22 10.12L4.78 9.58C4.03333 9.40667 3.36667 9.18 2.78 8.9C2.20667 8.60667 1.75333 8.22 1.42 7.74C1.08667 7.24667 0.92 6.63333 0.92 5.9C0.92 5.07333 1.14667 4.34 1.6 3.7C2.05333 3.04667 2.70667 2.53333 3.56 2.16C4.41333 1.78667 5.43333 1.6 6.62 1.6ZM15.7716 3.84C15.0782 3.84 14.5716 3.71333 14.2516 3.46C13.9449 3.19333 13.7916 2.78 13.7916 2.22C13.7916 1.64667 13.9449 1.23333 14.2516 0.979999C14.5716 0.713333 15.0782 0.58 15.7716 0.58C16.4516 0.58 16.9516 0.713333 17.2716 0.979999C17.5916 1.23333 17.7516 1.64667 17.7516 2.22C17.7516 2.78 17.5916 3.19333 17.2716 3.46C16.9516 3.71333 16.4516 3.84 15.7716 3.84ZM17.4716 5V15H14.0716V5H17.4716ZM19.8919 15V5H22.9319L23.0319 6.94C23.3519 6.23333 23.7985 5.7 24.3719 5.34C24.9585 4.98 25.6319 4.8 26.3919 4.8C27.1385 4.8 27.7852 4.96667 28.3319 5.3C28.8785 5.63333 29.2852 6.12667 29.5519 6.78C29.7652 6.34 30.0385 5.97333 30.3719 5.68C30.7185 5.38667 31.1119 5.16667 31.5519 5.02C31.9919 4.87333 32.4452 4.8 32.9119 4.8C33.5785 4.8 34.1652 4.93333 34.6719 5.2C35.1785 5.45333 35.5785 5.84667 35.8719 6.38C36.1785 6.9 36.3319 7.55333 36.3319 8.34V15H32.9319V9.12C32.9319 8.48 32.8052 8.03333 32.5519 7.78C32.3119 7.52667 31.9852 7.4 31.5719 7.4C31.2385 7.4 30.9319 7.48667 30.6519 7.66C30.3852 7.82 30.1785 8.06667 30.0319 8.4C29.8852 8.73333 29.8119 9.15333 29.8119 9.66V15H26.4119V9.12C26.4119 8.48 26.2852 8.03333 26.0319 7.78C25.7785 7.52667 25.4519 7.4 25.0519 7.4C24.7452 7.4 24.4519 7.48 24.1719 7.64C23.9052 7.8 23.6919 8.05333 23.5319 8.4C23.3719 8.73333 23.2919 9.17333 23.2919 9.72V15H19.8919ZM38.72 19.2V5H41.78L41.96 8.62L41.56 8.2C41.6533 7.53333 41.86 6.94667 42.18 6.44C42.5 5.93333 42.9133 5.53333 43.42 5.24C43.9267 4.94667 44.5067 4.8 45.16 4.8C45.9867 4.8 46.7067 5.00667 47.32 5.42C47.9333 5.82 48.4067 6.40667 48.74 7.18C49.0867 7.94 49.26 8.86667 49.26 9.96C49.26 11.0533 49.0867 11.9933 48.74 12.78C48.3933 13.5667 47.9067 14.1667 47.28 14.58C46.6667 14.9933 45.9467 15.2 45.12 15.2C44.2133 15.2 43.48 14.9333 42.92 14.4C42.36 13.8533 41.9867 13.1667 41.8 12.34L42.12 11.86V19.2H38.72ZM43.96 12.7C44.5467 12.7 45.0067 12.4867 45.34 12.06C45.6733 11.62 45.84 10.9333 45.84 10C45.84 9.06667 45.6733 8.38667 45.34 7.96C45.02 7.52 44.5667 7.3 43.98 7.3C43.6067 7.3 43.28 7.40667 43 7.62C42.72 7.82 42.5 8.12 42.34 8.52C42.1933 8.92 42.12 9.41333 42.12 10C42.12 10.56 42.1867 11.0467 42.32 11.46C42.4667 11.86 42.68 12.1667 42.96 12.38C43.24 12.5933 43.5733 12.7 43.96 12.7ZM54.6191 0.76V11.6C54.6191 12.04 54.6924 12.3533 54.8391 12.54C54.9857 12.7267 55.2324 12.82 55.5791 12.82C55.7791 12.82 55.9457 12.8067 56.0791 12.78C56.2124 12.7533 56.3724 12.7133 56.5591 12.66L56.3391 14.7C56.0991 14.8467 55.7857 14.9667 55.3991 15.06C55.0124 15.1533 54.6324 15.2 54.2591 15.2C53.1924 15.2 52.4191 14.9533 51.9391 14.46C51.4591 13.9667 51.2191 13.16 51.2191 12.04V0.76H54.6191ZM62.682 15.2C61.5754 15.2 60.6154 14.9933 59.802 14.58C59.002 14.1667 58.382 13.5733 57.942 12.8C57.502 12.0267 57.282 11.0933 57.282 10C57.282 8.90667 57.502 7.97333 57.942 7.2C58.382 6.42667 58.9954 5.83333 59.782 5.42C60.582 5.00667 61.4954 4.8 62.522 4.8C63.5754 4.8 64.4687 5.00667 65.202 5.42C65.9487 5.82 66.5154 6.38 66.902 7.1C67.2887 7.80667 67.482 8.62 67.482 9.54C67.482 9.78 67.4754 10.02 67.462 10.26C67.4487 10.5 67.4287 10.7 67.402 10.86H59.482V9.04H65.902L64.282 9.66C64.282 8.86 64.1354 8.24667 63.842 7.82C63.562 7.39333 63.122 7.18 62.522 7.18C62.0954 7.18 61.7287 7.28 61.422 7.48C61.1287 7.68 60.902 7.99333 60.742 8.42C60.5954 8.84667 60.522 9.39333 60.522 10.06C60.522 10.7133 60.6087 11.2467 60.782 11.66C60.9554 12.06 61.202 12.3533 61.522 12.54C61.842 12.7133 62.2287 12.8 62.682 12.8C63.1887 12.8 63.5887 12.7 63.882 12.5C64.1887 12.3 64.4154 12.02 64.562 11.66L67.282 12.56C67.0954 13.1333 66.7687 13.62 66.302 14.02C65.8487 14.4067 65.302 14.7 64.662 14.9C64.0354 15.1 63.3754 15.2 62.682 15.2ZM78.7867 12.34H85.4067V15H75.3467V1.8H78.7867V12.34ZM92.718 8.66C92.718 8.19333 92.5846 7.82667 92.318 7.56C92.0646 7.28 91.718 7.14 91.278 7.14C90.838 7.14 90.458 7.25333 90.138 7.48C89.8313 7.69333 89.618 8.08 89.498 8.64L86.618 7.96C86.8046 7 87.298 6.23333 88.098 5.66C88.898 5.08667 90.0246 4.8 91.478 4.8C92.4513 4.8 93.278 4.94667 93.958 5.24C94.6513 5.52 95.178 5.94667 95.538 6.52C95.9113 7.08 96.098 7.77333 96.098 8.6V12.26C96.098 12.78 96.3313 13.04 96.798 13.04C97.038 13.04 97.2313 13.0133 97.378 12.96L97.178 14.9C96.778 15.0867 96.2913 15.18 95.718 15.18C95.198 15.18 94.738 15.1 94.338 14.94C93.938 14.7667 93.6246 14.5133 93.398 14.18C93.1713 13.8333 93.058 13.4 93.058 12.88V12.76L93.438 12.62C93.438 13.1933 93.2646 13.6733 92.918 14.06C92.5846 14.4467 92.1446 14.7333 91.598 14.92C91.0646 15.1067 90.5046 15.2 89.918 15.2C89.238 15.2 88.6446 15.0933 88.138 14.88C87.6313 14.6667 87.238 14.36 86.958 13.96C86.6913 13.5467 86.558 13.04 86.558 12.44C86.558 11.72 86.7713 11.1267 87.198 10.66C87.638 10.18 88.3246 9.84667 89.258 9.66L93.038 8.88L93.018 10.68L91.098 11.08C90.698 11.16 90.398 11.28 90.198 11.44C90.0113 11.5867 89.918 11.8133 89.918 12.12C89.918 12.4133 90.0246 12.6333 90.238 12.78C90.4513 12.9267 90.7046 13 90.998 13C91.2246 13 91.438 12.9667 91.638 12.9C91.8513 12.8333 92.038 12.7333 92.198 12.6C92.358 12.4533 92.4846 12.2733 92.578 12.06C92.6713 11.8467 92.718 11.5933 92.718 11.3V8.66ZM108.135 5L104.495 15C104.122 16.0533 103.715 16.8933 103.275 17.52C102.835 18.1467 102.315 18.6 101.715 18.88C101.115 19.16 100.395 19.3 99.5555 19.3C98.9955 19.3 98.4821 19.24 98.0155 19.12C97.5488 19 97.1421 18.8333 96.7955 18.62L97.4755 16.32C97.7155 16.4933 97.9688 16.6133 98.2355 16.68C98.5021 16.76 98.8421 16.8 99.2555 16.8C99.6421 16.8 99.9555 16.7333 100.195 16.6C100.449 16.4667 100.649 16.2133 100.795 15.84L101.055 15.22L99.8955 12.5L96.8955 5H100.635L102.175 10.7L102.655 12.82L103.215 10.62L104.755 5H108.135ZM113.929 4.8C114.983 4.8 115.903 5.00667 116.689 5.42C117.489 5.82 118.109 6.41333 118.549 7.2C119.003 7.97333 119.229 8.90667 119.229 10C119.229 11.0933 119.003 12.0333 118.549 12.82C118.109 13.5933 117.489 14.1867 116.689 14.6C115.903 15 114.983 15.2 113.929 15.2C112.903 15.2 111.989 15 111.189 14.6C110.389 14.1867 109.763 13.5933 109.309 12.82C108.869 12.0333 108.649 11.0933 108.649 10C108.649 8.90667 108.869 7.97333 109.309 7.2C109.763 6.41333 110.389 5.82 111.189 5.42C111.989 5.00667 112.903 4.8 113.929 4.8ZM113.929 7.22C113.543 7.22 113.209 7.31333 112.929 7.5C112.649 7.68667 112.436 7.98667 112.289 8.4C112.143 8.81333 112.069 9.34667 112.069 10C112.069 10.6533 112.143 11.1867 112.289 11.6C112.436 12 112.649 12.3 112.929 12.5C113.209 12.6867 113.543 12.78 113.929 12.78C114.329 12.78 114.669 12.6867 114.949 12.5C115.229 12.3 115.443 12 115.589 11.6C115.736 11.1867 115.809 10.6533 115.809 10C115.809 9.34667 115.736 8.81333 115.589 8.4C115.443 7.98667 115.229 7.68667 114.949 7.5C114.669 7.31333 114.329 7.22 113.929 7.22ZM124.522 15.2C123.842 15.2 123.242 15.0867 122.722 14.86C122.215 14.62 121.815 14.24 121.522 13.72C121.229 13.2 121.082 12.52 121.082 11.68V5H124.482V10.88C124.482 11.52 124.609 11.9667 124.862 12.22C125.115 12.4733 125.475 12.6 125.942 12.6C126.182 12.6 126.409 12.56 126.622 12.48C126.835 12.3867 127.022 12.2533 127.182 12.08C127.342 11.8933 127.462 11.66 127.542 11.38C127.635 11.0867 127.682 10.7467 127.682 10.36V5H131.082V15H128.042L127.942 13.12C127.622 13.8267 127.175 14.3533 126.602 14.7C126.029 15.0333 125.335 15.2 124.522 15.2ZM137.705 1.82V11.44C137.705 11.92 137.818 12.2667 138.045 12.48C138.285 12.68 138.611 12.78 139.025 12.78C139.345 12.78 139.618 12.7467 139.845 12.68C140.085 12.6 140.298 12.4867 140.485 12.34L140.845 14.44C140.511 14.68 140.091 14.8667 139.585 15C139.078 15.1333 138.558 15.2 138.025 15.2C137.265 15.2 136.605 15.0933 136.045 14.88C135.498 14.6667 135.071 14.3267 134.765 13.86C134.471 13.3933 134.318 12.7733 134.305 12V2.76L137.705 1.82ZM140.685 5V7.42H132.585V5H140.685Z"
                fill="currentColor" />
        </svg>
    </a>
</div>
<ul class="nav-list" id="navlist">
    <div class="nav-listcontainer remove-mobile">
        <li class="nav-listitems remove-mobile"><a href="#">Overview</a></li>
        <li class="nav-listitems dropdown remove-mobile"><a href="#">Products</a>
            <div class="dropdown-content">
                <a href="#">Art</a>
                <a href="#">Design</a>
            </div>
        </li>
        <li class="nav-listitems dropdown remove-mobile"><a href="#">Docs</a>
            <div class="dropdown-content">
                <a href="/#faq">Information</a>
                <a href="#">Github</a>
                <a href="/#faq">FAQ</a>
            </div>
        </li>
    </div>
    <button class="wallet-container btn draw-border" id="connect-open">
        <span class="wallet-container-inline" data-tooltip="Network status: Good"
            data-tooltip-location="bottom">
            <?xml version="1.0" encoding="UTF-8"?><svg width="11px" height="11px" stroke-width="4" stroke="#E33232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path></svg>
        </span>
        <text>Connect</text>
    </button>
</ul>
    `;
}

createtopNav();