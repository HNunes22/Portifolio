
        /* Barra de navegação */

        .barra-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: hsla(240, 1%, 17%, 0.75);
            backdrop-filter: blur(10px);
            border: 1px solid var(--jet);
            border-radius: 12px 12px 0 0;
            box-shadow: var(--shadow-2);
            z-index: 5;
        }

        .lista-barra-nav {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 0 10px;
        }

        .navbar-link {
            color: var(--light-gray);
            font-size: var(--fs-11px);
            padding: 20px 7px;
            transition: color var(--transition-1);
        }

        .navbar-link:hover, .navbar-link:focus {
            color: var(--light-gray-70);
        }

        .navbar-link.active {
            color: #0091FF;
        }

        /* Sobre */

        .sobre .titulo-atirculado {
            margin-bottom: 15px;
        }

        .texto-sobre {
            color: var(--light-gray);
            font-size: var(--fs-14px);
            font-weight: var(--fw-300);
            line-height: 1.6;
        }

        .texto-sobre p {
            margin-bottom: 15px;
        }

        /* Serviço */

        .servico {
            margin-bottom: 35px;
        }

        .titulo-servico {
            margin-bottom: 20px;
        }

        .lista-servico {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .item-servico {
            position: relative;
            background: var(--bg-gradient-onyx);
            padding: 20px;
            border-radius: 14px;
            box-shadow: var(--shadow-2);
            z-index: 1;
        }

        .item-servico::before {
            content: "";
            position: absolute;
            inset: 1px;
            background: var(--bg-gradient-jet);
            border-radius: inherit;
            z-index: -1;
        }

        .caixa-icone-servico {
            margin-bottom: 10px;
        }

        .caixa-icone-servico img {
            margin: auto;
            filter: drop-shadow(1px 1px 5px #0091FF);
        }

        .caixa-conteudo-servico {
            text-align: center;
        }

        .item-titulo-servico {
            margin-bottom: 7px;
        }

        .texto-item-servico {
            color: var(--light-gray);
            font-size: var(--fs-14px);
            font-weight: var(--fw-300);
            line-height: 1.6;
        }


        /* Testemunhas*/

        .testemunhas {
            margin-bottom: 30px;
        }

        .titulo-testemunhas {
            margin-bottom: 20px;
        }

        .lista-testemunhas {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 15px;
            margin: 0 -15px;
            padding: 25px 15px;
            padding-bottom: 35px;
            overflow-x: auto;
            scroll-behavior: smooth;
            overscroll-behavior-inline: contain;
            scroll-snap-type: inline mandatory;
        }

        .item-testemunhas {
            min-width: 100%;
            scroll-snap-align: center; /* Alinha a barra de rolamento*/
        }

        .caixa-avatar-testemunhas {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(15px, -25px);
            background: var(--bg-gradient-onyx);
            border-radius: 14px;
            box-shadow: var(--shadow-1);
        }

        .item-titulo-testemunhas {
            margin-bottom: 7px;
        }

        .texto-testemunhas {
            color: var(--light-gray);
            font-size: var(--fs-14px);
            font-weight: var(--fw-300);
            line-height: 1.6;
            display: -webkit-box;
            line-clamp: 4; /*Colocar limite de texto, caso exeda, terá um elipse (...)*/
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        /* Testemunhas Formal */

        .formal-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-y: auto;
            overscroll-behavior: contain;
            z-index: 20;
            pointer-events: none;
            visibility: hidden;
        }

        .formal-container::-webkit-scrollbar {
            display: none;
        }

        .formal-container.active {
            pointer-events: all;
            visibility: visible;
        }

        .exagerar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: hsl(0, 0%, 5%);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            z-index: 1;
            transition: var(--transition-1);
        }

        .exagerar.active {
            opacity: 0.8;
            visibility: visible;
            pointer-events: all;
        }

        .testemunhas-formal {
            background: var(--eerie-black-2);
            position: relative;
            padding: 15px;
            margin: 15px 12px;
            border: 1px solid var(--jet);
            border-radius: 14px;
            box-shadow: var(--shadow-5);
            transform: scale(1.2);
            opacity: 0;
            transition: var(--transition-1);
            z-index: 2;
        }

        .formal-container.active .testemunhas-formal {
            transform: scale(1);
            opacity: 1;
        }

        .btn-formal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: var(--onyx);
            border-radius: 8px;
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--white-2);
            font-size: var(--fs-18px);
            opacity: 0.7;
        }

        .btn-formal-close:hover, .btn-formal-close:focus {
            opacity: 1;
        }

        .btn-formal-close i {
            width: 50px;
        }

        .caixa-avatar-formal {
            background: var(--bg-gradient-onyx);
            width: max-content;
            border-radius: 14px;
            margin-bottom: 15px;
            box-shadow: var(--shadow-2);
        }

        .formal-img-wpp > img {
            display: none;
        }

        .titulo-formal {
            margin-bottom: 4px;
        }

        .conteudo-formal time {
            font-size: var(--fs-14px);
            color: var(--light-gray-70);
            font-weight: var(--fw-300);
            margin-bottom: 10px;
        }

        .conteudo-formal p {
            color:var(--light-gray);
            font-size: var(--fs-14px);
            font-weight: var(--fw-300);
            line-height: 1.6;
        }

        /* Clientes */

        .clientes {
            margin-bottom: 15px;
        }

        .lista-clientes {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 15px;
            margin: 0 -15px;
            padding: 25px;
            padding-bottom: 25px;
            overflow-x: auto;
            scroll-behavior: smooth;
            overscroll-behavior-inline: contain;
            scroll-snap-type: inline mandatory;
            scroll-padding-inline: 25px;        
        }

        .item-cliente {
            min-width: 50%;
            scroll-snap-align: start;
        }

        .item-cliente img {
            width: 35%;
            filter: grayscale(1);
            transition: var(--transition-1);
        }

        .item-cliente img:hover {
            filter: grayscale(0);
        }

        /* Curriculo */

        .titulo-articulado {
            margin-bottom: 30px;
        }

        /* Educação e experiências */

        .timeline {
            margin-bottom: 30px;
        }

        .timeline .titulo-wpp {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
        }

        .lista-timeline {
            font-size: var(--fs-14px);
            margin-left: 45px;
        }

        .item-timeline {
            position: relative;
        }

        .item-timeline:not(:last-child) { /*O ultimo filho não vai ter a regra*/
            margin-bottom: 20px;
        }

        .titulo-item-timeline {
            font-size: var(--fs-14px);
            line-height: 1.3;
            margin-bottom: 7px;
        }

        .lista-timeline span {
            color: var(--vegas-gold);
            font-weight: var(--fw-400);
            line-height: 1.6;
        }

        .item-timeline:not(:last-child)::before {
            content: "";
            position: absolute;
            top: -25px;
            left: -30px;
            width: 1px;
            height: calc(100% + 50px);
            background: var(--jet);
        }

        .item-timeline::after {
            content: "";
            position: absolute;
            top: 5px;
            left: -33px;
            height: 6px;
            width: 6px;
            background: var(--text-gradient-blue);
            border-radius: 50%;
            box-shadow: 0 0 0 4px var(--jet);
        }

        .texto-timeline {
            color: var(--light-gray);
            font-weight: var(--fw-300);
            line-height: 1.6;
        }


            /* Habilidades */

        .titulo-habilidades {
            margin-bottom: 20px;
        }

        .lista-habilidades {
            padding: 20px;
        }

        .item-habilidades:not(:last-child) {
            margin-bottom: 15px;
        }
        
        .habilidade .titulo-wpp {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 8px;
        }

        .habilidade .titulo-wpp data {
            color: var(--light-gray);
            font-size: var(--fs-13px);
            font-weight: var(--fw-300);
        }

        .progresso-habilidade-bg {
            background: var(--jet);
            width: 100%;
            height: 8px;
            border-radius: 10px;
        }

        .progresso-habilidade-pe {
            background: var(--text-gradient-blue);
            height: 100%;
            border-radius: inherit;
        }


        /* Portifólio */

        .lista-filtrada {
            display: none;
        }

        .caixa-filtrada-selecionada {
            position: relative;
            margin-bottom: 25px;
        }

        .selecao-filtrada {
            background: var(--eerie-black-2);
            color: var(--light-gray);
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 12px 16px;
            border: 1px solid var(--jet);
            border-radius: 14px;
            font-size: var(--fs-14px);
            font-weight: var(--fw-300);
        }

        .selecao-filtrada.active .icone-selecao {
            transform: rotate(0.5turn);
        }

        .selecionar-lista {
            background: var(--eerie-black-2);
            position: absolute;
            top: calc(100% + 6px);
            width: 100%;
            padding: 6px;
            border: 1px solid var(--jet);
            border-radius: 14px;
            z-index: 2;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: 0.15s ease-in-out;
        }

        .selecao-filtrada.active + .selecionar-lista {
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }

        .item-selecao button {
            background: var(--eerie-black-2);
            color: var(--light-gray);
            font-size: var(--fs-14px);
            font-weight: var(--fw-300);
            text-transform: capitalize;
            width: 100%;
            padding: 8px 10px;
            border-radius: 8px;
        }

        .item-selecao button:hover {
            --eerie-black-2: hsl(240, 2%, 20%);
        }

        .lista-projetos {
            display: grid;
            grid-template-columns: 1fr;
            gap: 30px;
            margin-bottom: 10px;
        }

        .item-projeto {
            display: none;
        }

        .item-projeto.active {
            display: block;
            animation: scaleUp 0.25s ease forwards;
        }

        @keyframes scaleUp {
            0% {
                transform: scale(0.5);
            }

            100% {
                transform: scale(1);
            }
        }

        .item-projeto > a {
            width: 100%;
        }

        .img-projeto {
            position: relative;
            width: 100%;
            height: 200px;
            border-radius: 16px;
            overflow: hidden;
            margin-bottom: 15px;
        }

        .img-projeto::before {
            content: "";
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            z-index: 1;
            transition: var(--transition-1);
        }

        .item-projeto > a:hover .img-projeto::before {
        background: hsla(0, 0%, 0%, 0.5);
        }

        .caixa-icone-item-projeto {
            --scale: 0.8;

            background: var(--jet);
            color: var(--Blue-main);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(var(--scale));
            font-size: 20px;
            padding: 18px;
            border-radius: 12px;
            opacity: 0;
            z-index: 1;
            transform: var(--transition-1);
        }

        .item-projeto > a:hover .caixa-icone-item-projeto {
            --scale: 1;
            opacity: 1;
        }

        .caixa-icone-item-projeto i {
            width: 50px;
        }

        .img-projeto img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition-1);
        }

        .item-projeto > a:hover img {
            transform: scale(1.1);
        }

        .titulo-projeto, .categoria-projeto {
            margin-left: 10px;
        }

        .titulo-projeto {
            color: var(--white-2);
            font-size: var(--fs-15px);
            font-weight: var(--fw-400);
            text-transform: capitalize;
            line-height: 1.3;
        }

        .categoria-projeto {
            color: var(--light-gray-70);
            font-size: var(--fs-14px);
            font-weight: var(--fw-300);
        }

        /* Blog */

        .blog-posts {
            margin-bottom: 10px;
        }

        .lista-blog-post {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .item-blog-post > a {
            position: relative;
            background: var(--border-gradient-onyx);
            height: 100%;
            box-shadow: var(--shadow-4);
            border-radius: 16px;
            z-index: 1;
        }

        .item-blog-post > a::before {
            content: "";
            position: absolute;
            inset: 1px;
            border-radius: inherit;
            background: var(--eerie-black-1);
            z-index: -1;
        }

        .caixa-blog-banner {
            width: 100%;
            height: 200px;
            border-radius: 12px;
            overflow: hidden;
        }

        .caixa-blog-banner img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition-1);
        }

        .item-blog-post > a:hover .caixa-blog-banner img {
            transform: scale(1.1);
        }

        .conteudo-blog {
            padding: 15px;
        }

        .blog-meta {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 7px;
            margin-bottom: 10px;
        }

        .blog-meta :is(.categoria-blog, time) {
            color: var(--light-gray-70);
            font-size: var(--fs-14px);
            font-weight: var(--fw-300);
        }

        .blog-meta .ponto {
            background: var(--light-gray-70);
            width: 4px;
            height: 4px;
            border-radius: 4px;
        }

        .item-blog-post > a:hover .titulo-blog-item {
            color: var(--Blue-main);
        }

        .blog-text {
            color: var(--light-gray);
            font-size: var(--fs-14px);
            font-weight: var(--fw-300);
            line-height: 1.6;
        }

        /* Contatos */

        .mapbox {
            position: relative;
            height: 250px;
            width: 100%;
            border-radius: 16px;
            margin-bottom: 30px;
            border: 1px solid var(--jet);
            overflow: hidden;
        }

        .mapbox figure {
            height: 100%;
        }

        .mapbox iframe {
            width: 100%;
            height: 100%;
            border: none;
            filter: grayscale(1) invert(1);
        }

        .contato-formal {
            margin-bottom: 10px;
        }

        .titulo-formal {
            margin-bottom: 20px;
        }

        .input-wpp {
            display: grid;
            grid-template-columns: 1fr;
            gap: 25px;
            margin-bottom: 25px;
        }

        .input-formal {
            color: var(--white-2);
            font-size: var(--fs-14px);
            font-weight: var(--fw-400);
            padding: 13px 20px;
            border: 1px solid var(--jet);
            border-radius: 14px;
            outline: none;
        }

        .input-formal::placeholder {
            font-weight: var(--fw-500);
        }

        .input-formal:focus {
            border-color: var(--Blue-main);
        }

        textarea.input-formal {
            min-height: 100px;
            height: 120px;
            max-height: 200px;
            resize: vertical; 
            margin-bottom: 25px;
        }

        textarea.input-formal::-webkit-resizer {
            display: none;
        }

        .input-formal:focus:invalid {
            border-color: var(--bittersweet-shimmer);
        }

        .formal-btn {
            position: relative;
            width: 100%;
            background: var(--border-gradient-onyx);
            color: var(--Blue-main);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            padding: 13px 20px;
            border-radius: 14px;
            font-size: var(--fs-14px);
            text-transform: capitalize;
            box-shadow: var(--shadow-3);
            z-index: 1;
            transition: var(--transition-1);
        }

        .formal-btn::before {
            content: "";
            position: relative;
            inset: 1px;
            background: var(--bg-gradient-jet);
            border-radius: inherit;
            z-index: -1;
            transition: var(--transition-1);
        }

        .formal-btn i {
            font-size: var(--fs-16px);
        }

        .formal-btn:hover {
            background: var(--bg-gradient-blue-1);
        }

        .formal-btn:hover::before {
                background: var(--bg-gradient-blue-2);
            }

        .formal-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }

        .formal-btn:disabled::before {
            background: var(--bg-gradient-onyx);
        }

        .formal-btn:disabled:hover::before {
            background: var(--bg-gradient-jet);
        }
        */