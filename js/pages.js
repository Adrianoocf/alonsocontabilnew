const pages = {
  "/": `
    <section class="hero-section">
      <div class="hero-image"></div>
      <div class="hero-content">
        <h1>
          Sua empresa em<span style="color:#004494;"> boas mãos</span>
        </h1>
        <p class="section-subtitle">
          Especialistas em transformar sua contabilidade em uma
          ferramenta de lucro. Atendimento humanizado em São Paulo.
        </p>
        <a
          href="https://wa.me/5511995172741"
          target="_blank" 
          rel="noopener noreferrer"
          class="cta-button-home">
          Quero Falar com um Especialista Agora
        </a>
      </div>
    </section>
    <section id="solucoes" class="solutions-section">
      <div class="solutions-header">
        <h2>Soluções completas para sua empresa</h2>
        <p>Serviços contábeis estratégicos para crescimento e segurança</p>
      </div>
      <div class="solutions-grid">
        <!-- CARD 1 -->
        <article class="solution-card flip-card" onclick="this.classList.toggle('active')">
          <div class="flip-inner">
            <div class="flip-front">
              <h3>
                <span class="badge">1</span>
                Contabilidade Completa
              </h3>
              <p>
                Gestão contábil, fiscal e financeira com foco em precisão e conformidade.
              </p>
              <ul>
                <li>Balanços e DRE</li>
                <li>Obrigações acessórias</li>
                <li>Relatórios gerenciais</li>
              </ul>
              <span class="flip-hint">Clique para saber mais</span>
            </div>
            <div class="flip-back">
              <h3>Contabilidade Estratégica</h3>
              <p>
                Informações confiáveis, visão clara dos números e apoio técnico para decisões
                seguras e crescimento sustentável da empresa.
              </p>
              <a href="https://wa.me/5511995172741" target="_blank" class="back-cta">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </article>
        <!-- CARD 2 -->
        <article class="solution-card flip-card" onclick="this.classList.toggle('active')">
          <div class="flip-inner">
            <div class="flip-front">
              <h3>
                <span class="badge">2</span>
                Planejamento Tributário
              </h3>
              <p>
                Redução legal da carga tributária com análise técnica e estratégia.
              </p>
              <ul>
                <li>Escolha do regime ideal</li>
                <li>Economia fiscal legal</li>
                <li>Prevenção de riscos</li>
              </ul>
              <span class="flip-hint">Clique para saber mais</span>
            </div>
            <div class="flip-back">
              <h3>Economia de Impostos</h3>
              <p>
                Estratégias tributárias seguras para pagar menos impostos e manter sua empresa
                em total conformidade com a legislação.
              </p>
              <a href="https://wa.me/5511995172741" target="_blank" class="back-cta">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </article>
        <!-- CARD 3 -->
        <article class="solution-card flip-card" onclick="this.classList.toggle('active')">
          <div class="flip-inner">
            <div class="flip-front">
              <h3>
                <span class="badge">3</span>
                Departamento Pessoal
              </h3>
              <p>
                Administração completa das rotinas trabalhistas com segurança jurídica.
              </p>
              <ul>
                <li>Folha de pagamento</li>
                <li>eSocial e obrigações</li>
                <li>Gestão de benefícios</li>
              </ul>
              <span class="flip-hint">Clique para saber mais</span>
            </div>
            <div class="flip-back">
              <h3>Segurança Trabalhista</h3>
              <p>
                Processos organizados, prazos em dia e tranquilidade para você focar no seu
                negócio sem preocupações trabalhistas.
              </p>
              <a href="https://wa.me/5511995172741" target="_blank" class="back-cta">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </article>
        <!-- CARD 4 -->
        <article class="solution-card link-card" onclick="window.location.href='#/evolucao'">
          <div class="flip-inner">
            <div class="flip-front">
              <h3>
                <span class="badge">4</span>
                Evolução MEI → ME
              </h3>
              <p>
                Quando crescer começa a custar caro se você não evoluir.
              </p>
              <ul>
                <li>Evite desenquadramento</li>
                <li>Mais faturamento</li>
                <li>Proteção patrimonial</li>
              </ul>
              <span class="flip-hint">Clique para saber mais</span>
            </div>
          </div>
        </article>
        <!-- CARD 5 -->
        <article class="solution-card link-card" onclick="window.location.href='#/diferencas'">
          <div class="flip-inner">
            <div class="flip-front">
              <h3>
                <span class="badge">5</span>
                MEI, LTDA ou SLU?
              </h3>
              <p>
                Escolher errado pode colocar seu patrimônio em risco.
              </p>
              <ul>
                <li>Blindagem patrimonial</li>
                <li>Sem limite de faturamento</li>
                <li>Mais credibilidade</li>
              </ul>
              <span class="flip-hint">Clique para saber mais</span>
            </div>
          </div>
        </article>
        <!-- Card 6 -->
        <article class="solution-card link-card" onclick="window.location.href='#/impostos'">
          <div class="flip-inner">
            <div class="flip-front">
              <h3>
                <span class="badge">6</span>
                Redução de Impostos
              </h3>
              <p>
                Pague menos sem risco fiscal com estratégias tributárias seguras.
              </p>
              <ul>
                <li>Fator R</li>
                <li>Simples x Presumido</li>
                <li>Economia legal</li>
              </ul>
              <span class="flip-hint">Clique para saber mais</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="sobre" class="about-section">
      <div class="about-container">
        <div class="about-image-wrapper">
          <img src="/img/img6.jpg" alt="Experiência e tecnologia Alonso Contábil">
          <div class="about-badge">
            <strong>10+</strong>
            <span>Anos de tradição<br>e inovação</span>
          </div>
        </div>
        <div class="about-content">
          <h2>Experiência e tecnologia a serviço do seu sucesso</h2>
          <p>
            A Alonso Contábil nasceu com o propósito de transformar a relação entre
            empresários e contabilidade. Combinamos uma década de experiência com as
            mais modernas ferramentas tecnológicas.
          </p>
          <p>
            Nossa equipe de especialistas está preparada para entender as
            particularidades do seu negócio e oferecer soluções personalizadas que
            realmente fazem diferença no seu resultado.
          </p>
          <div class="about-features">
            <div class="about-feature">
              <span class="check-icon">✔</span>
              <div>
                <strong>CRC Regularizado</strong>
                <p>Registro profissional ativo e regular</p>
              </div>
            </div>
            <div class="about-feature">
              <span class="check-icon">✔</span>
              <div>
                <strong>Equipe Especializada</strong>
                <p>Profissionais certificados e atualizados</p>
              </div>
            </div>
            <div class="about-feature">
              <span class="check-icon">✔</span>
              <div>
                <strong>Tecnologia Avançada</strong>
                <p>Sistemas modernos e seguros</p>
              </div>
            </div>
            <div class="about-feature">
              <span class="check-icon">✔</span>
              <div>
                <strong>Atendimento Premium</strong>
                <p>Suporte dedicado e personalizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why-section">
      <div class="why-header">
        <h2>
          <span class="highlight-blue">Por que escolher a Alonso</span><br>
          <span class="highlight-blue">Contábil?</span>
        </h2>
        <p class="why-subtitle">
          <span class="light">
            Diferenciais que fazem toda a diferença no seu dia a dia
          </span>
        </p>
      </div>
      <div class="why-grid">
        <div class="why-card">
          <div class="why-icon">
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="why-icon-svg">
              <path d="M9 12.75 11.25 15 15 9.75m-3-7.036
                      A11.959 11.959 0 0 1 3.598 6
                      11.99 11.99 0 0 0 3 9.749
                      c0 5.592 3.824 10.29 9 11.623
                      5.176-1.332 9-6.03 9-11.622
                      0-1.31-.21-2.571-.598-3.751
                      h-.152c-3.196 0-6.1-1.248
                      -8.25-3.285Z" />
            </svg>
          </div>
          <h3><span class="small">Segurança Total</span></h3>
          <p>
            <span class="small light">
              Seus dados protegidos com os mais altos padrões de segurança
            </span>
          </p>
        </div>

        <div class="why-card">
          <div class="why-icon">
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon-outline">
              <path d="M12 6v6h4.5
                      m4.5 0
                      a9 9 0 1 1-18 0
                      9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h3><span class="small">Agilidade</span></h3>
          <p>
            <span class="small light">
              Processos otimizados para economizar seu tempo
            </span>
          </p>
        </div>
        <div class="why-card">
          <div class="why-icon">
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon-outline">
                <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372
                      9.337 9.337 0 0 0 4.121-.952
                      4.125 4.125 0 0 0-7.533-2.493
                      M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07
                      M15 19.128v.106A12.318 12.318 0 0 1 8.624 21
                      c-2.331 0-4.512-.645-6.374-1.766l-.001-.109
                      a6.375 6.375 0 0 1 11.964-3.07
                      M12 6.375a3.375 3.375 0 1 1-6.75 0
                      3.375 3.375 0 0 1 6.75 0
                      Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0
                      2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
          </div>
          <h3><span class="small">Atendimento Humanizado</span></h3>
          <p>
            <span class="small light">
              Relacionamento próximo e consultoria personalizada
            </span>
          </p>
        </div>
        <div class="why-card">
          <div class="why-icon">
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon-outline">
              <path d="M7.5 14.25v2.25
                      m3-4.5v4.5
                      m3-6.75v6.75
                      m3-9v9
                      M6 20.25h12
                      A2.25 2.25 0 0 0 20.25 18V6
                      A2.25 2.25 0 0 0 18 3.75H6
                      A2.25 2.25 0 0 0 3.75 6v12
                      A2.25 2.25 0 0 0 6 20.25Z" />
            </svg>
          </div>
          <h3><span class="small">Resultados Reais</span></h3>
          <p>
            <span class="small light">
              Foco em economia tributária e crescimento sustentável
            </span>
          </p>
        </div>
      </div>
    </section>

    <section class="testimonials-section">
      <div class="testimonials-header">
        <h2>O que nossos clientes dizem</h2>
        <p>A confiança de quem já trabalha conosco</p>
      </div>
      <div class="testimonials-grid">
        <article class="testimonial-card">
          <div class="testimonial-user">
            <div>
              <strong>Maria Cabrera</strong>
              <span>Comerciante</span>
            </div>
          </div>
          <p class="testimonial-text">
            A Alonso Contábil transformou completamente a gestão da minha empresa.
            O planejamento tributário resultou em uma economia significativa e o
            atendimento é sempre impecável.
          </p>
          <div class="testimonial-stars">
            ★★★★★
          </div>
        </article>
        <article class="testimonial-card">
          <div class="testimonial-user">
            <div>
              <strong>Edvan de Jesus</strong>
              <span>Majin Burguer</span>
            </div>
          </div>
          <p class="testimonial-text">
            Profissionalismo e competência definem a Alonso. Sempre prontos para
            resolver qualquer questão, com agilidade e expertise. Recomendo de olhos
            fechados!
          </p>
          <div class="testimonial-stars">
            ★★★★★
          </div>
        </article>
        <article class="testimonial-card">
          <div class="testimonial-user">
            <div>
              <strong>Carolina Gambetta</strong>
              <span>Médica</span>
            </div>
          </div>
          <p class="testimonial-text">
            Mudei para a Alonso há 2 anos e foi a melhor decisão. Além de economizar
            em impostos, tenho total tranquilidade com a parte contábil do meu
            negócio.
          </p>
          <div class="testimonial-stars">
            ★★★★★
          </div>
        </article>
      </div>
    </section>

    <section class="contact">
      <h1>Pronto para transformar a contabilidade da sua empresa?</h1>
        <p class="section-subtitle">
        Nossa equipe está pronta para atender você. Entre em contato através dos canais abaixo
      </p>
      <div class="contact-grid">
        <!-- Email -->
        <a 
          href="mailto:atendimento@alonsocontabil.com.br" 
          class="contact-card" 
          rel="noopener noreferrer"
        >
          <div class="contact-icon">✉</div>
          <div class="contact-label">Email</div>
          <div class="contact-value">atendimento@alonsocontabil.com.br</div>
        </a>
        <!-- WhatsApp -->
        <a 
          href="https://wa.me/5511995172741"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <div class="contact-icon">☎</div>
          <div class="contact-label">WhatsApp</div>
          <div class="contact-value">(11) 99517-2741</div>
        </a>
        <!-- Insta -->
        <a 
          href="https://www.instagram.com/alonsocontabil" 
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <div class="contact-label">Insta</div>
          <div class="contact-value">
            @alonsocontabil
          </div>
        </a>
      </div>
    </section>

    <section id="faq" class="faq-section">
      <h2>Dúvidas Frequentes</h2>
      <div class="faq-container">
        <div class="faq-item">
          <button class="faq-question" type="button">
            Como funciona a migração de MEI para ME?
            <span class="icon"></span>
          </button>
          <div class="faq-answer">
            <p>
              A migração ocorre quando seu faturamento ultrapassa R$ 81 mil/ano ou quando você
              precisa contratar mais de um funcionário. Nós cuidamos de todo o processo na
              Junta Comercial e Receita Federal para que a transição seja rápida e segura.
            </p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question" type="button">
            O que é o Fator R e como ele reduz meu imposto?
            <span class="icon"></span>
          </button>
          <div class="faq-answer">
            <p>
              O Fator R permite que profissionais de TI, Saúde e Engenharia paguem 6% de imposto
              em vez de 15,5% no Simples Nacional. Nós fazemos o cálculo mensal da sua folha para
              garantir que você pague sempre o mínimo legal.
            </p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question" type="button">
            Quanto tempo demora para abrir meu CNPJ?
            <span class="icon"></span>
          </button>
          <div class="faq-answer">
            <p>
              Em São Paulo, conseguimos abrir seu CNPJ de prestação de serviços em uma média de
              2 a 5 dias úteis, dependendo da viabilidade da prefeitura.
            </p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question" type="button">
            Vou ter um contador exclusivo para me atender?
            <span class="icon"></span>
          </button>
          <div class="faq-answer">
            <p>
              Sim! Aqui você não é apenas um número. Nosso atendimento é humanizado e você terá
              contato direto com nossos especialistas via WhatsApp para tirar dúvidas em tempo
              real.
            </p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question" type="button">
            Como funciona a troca de contador?
            <span class="icon"></span>
          </button>
          <div class="faq-answer">
            <p>
              É muito simples. Você só precisa nos informar quem é seu contador atual e nós
              cuidamos de toda a migração dos documentos. Você não precisa se envolver em
              conversas desconfortáveis.
            </p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question" type="button">
            Minha empresa está inativa ou com dívidas, vocês resolvem?
            <span class="icon"></span>
          </button>
          <div class="faq-answer">
            <p>
              Sim. Fazemos um diagnóstico completo da situação fiscal da sua empresa,
              regularizamos pendências e propomos parcelamentos de débitos para que você volte
              a operar com tranquilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="cta-box">
      <h3>Comece hoje mesmo a economizar!</h3>
      <p>Fale com um contador em São Paulo especializado em MEI e PJ e receba um diagnóstico gratuito sobre impostos, enquadramento e riscos fiscais do seu negócio.</p>
      <a href="https://wa.me/5511995172741" 
        target="_blank" rel="noopener noreferrer" 
        class="cta-button cta-button--spaced">
        Solicitar Diagnóstico Gratuito
      </a>
    </div>
    `,

    "/servicos": `
      <section>
        <h1 class="service-title">Soluções Contábeis Inteligentes para o seu Negócio</h1>
        <p class="service-p">
          Tecnologia digital com consultoria estratégica para quem busca segurança, agilidade e redução legal de impostos em São Paulo.
        </p>

        <div class="service-grid">
          <div class="service-card">
            <h3>Plano Digital PJ</h3>
            <p>A solução ágil para profissionais de TI, Saúde, Engenharia e freelancers que buscam economia.</p>
            <span class="service-badge">PJ • MEI • Autônomos</span>     
            <ul class="lista-check">
              <li><strong>Redução pelo Fator R:</strong> Pague 6% em vez de 15,5% no Simples.</li>
              <li>Abertura de CNPJ rápida e digital.</li>
              <li>Emissão de Notas Fiscais e Guias simplificadas.</li>
              <li>Gestão de Pró-labore e contribuição ao INSS.</li>
              <li>Atendimento ágil via WhatsApp.</li>
            </ul>
            <a href="https://wa.me/5511995172741"
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-card">Saiba Mais</a>
          </div>

          <div class="service-card featured">
            <h3>Plano Business ME</h3>
            <p>Gestão completa para micro e pequenas empresas que precisam de suporte contínuo e folha de pagamento.</p>
            <span class="service-badge">ME • EPP • Simples Nacional</span>
            <ul class="lista-check">
              <li>Gestão de Folha de Pagamento e encargos sociais.</li>
              <li>Planejamento Tributário Anual (Simples vs Presumido).</li>
              <li>Escrituração Fiscal e Contábil Digital.</li>
              <li>Suporte consultivo para decisões de crescimento.</li>
              <li>Monitoramento de regularidade fiscal e CNDs.</li>
            </ul>
            <a 
              href="https://wa.me/5511995172741"
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-card">Saiba Mais
            </a>
          </div>

          <div class="service-card">
            <h3>Plano Consultivo LTDA</h3>
            <p>Estratégia avançada para empresas estruturadas que buscam blindagem e máxima eficiência fiscal.</p>
            <span class="service-badge">LTDA • Lucro Presumido • Gestão</span>
            <ul class="lista-check">
              <li><strong>Blindagem Patrimonial:</strong> Proteção dos bens dos sócios.</li>
              <li><strong>Lucro Presumido:</strong> Estratégias para faturamentos altos.</li>
              <li>Distribuição de Lucros isenta de impostos.</li>
              <li>Estruturação de Contrato Social Inteligente.</li>
              <li>Consultoria direta com contador sênior.</li>
            </ul>
            <a 
              href="https://wa.me/5511995172741"
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-card">Falar com Especialista
            </a>
          </div>
        </div>
        <div class="pj-section">
          <div class="pj-text">
            <h2>
              Transição de CLT para Pessoa Jurídica em São Paulo
            </h2>
            <p>
              Planeje sua transição de CLT para PJ com segurança jurídica
              e economia de impostos. Nossa consultoria especializada
              atende profissionais em São Paulo e região,
              garantindo conformidade fiscal e planejamento tributário eficiente.
            </p>
            <p>
              Uma migração mal planejada pode gerar problemas com a Receita Federal,
              INSS e até caracterizar pejotização irregular.
              Por isso, cada transição deve ser analisada de forma individual.
            </p>
          </div>
          <div class="pj-image"></div>
        </div>
      </section>
      <div class="cta-box">
          <h3>Pronto para pagar menos impostos com segurança?</h3>
          <p>Receba um diagnóstico tributário gratuito da sua empresa e descubra se você está no regime mais vantajoso.</p>
          <a href="https://wa.me/5511995172741" 
            target="_blank" rel="noopener noreferrer" 
            class="cta-button cta-button--spaced">
            Solicitar Diagnóstico Gratuito
          </a>
      </div>
    `,

    "/evolucao": `
    <section class="evolution-section">
      <h1 class="evolution-title">Do MEI ao Próximo Nível</h1>
      <p class="evolution-p">
        O limite de R$ 81 mil não deve ser uma barreira para o seu sucesso. Transformamos a migração do seu regime em um degrau estratégico para lucrar mais e proteger seu patrimônio.
      </p>
      
      <div class="evolution-grid">
        <div class="detail-section">
          <div class="badge-icon">⚠️</div>
          <h3>Sinais de que o MEI ficou pequeno</h3>
          <ul class="lista-check">
            <li>Faturamento próximo ou acima de <strong>R$ 6.750/mês</strong>.</li>
            <li>Necessidade de contratar mais de um colaborador.</li>
            <li>Desejo de atrair sócios ou investidores.</li>
            <li>Sua atividade não é mais permitida na lista do MEI.</li>
            <li>Empresas maiores exigem uma estrutura LTDA para contratar você.</li>
          </ul>
        </div>

        <div class="detail-section featured-evolution">
          <div class="badge-icon">🚀</div>
          <h3>O que você ganha ao evoluir</h3>
          <ul class="lista-check">
            <li><strong>Blindagem Patrimonial:</strong> Separação real entre seus bens e as dívidas da empresa.</li>
            <li><strong>Crédito Bancário:</strong> Acesso a juros menores e limites maiores como ME ou EPP.</li>
            <li><strong>Lucro Isento:</strong> Distribuição de lucros legal sem pagar IR na pessoa física.</li>
            <li><strong>Sem Teto de Ganho:</strong> Liberdade total para faturar e escalar seu negócio.</li>
          </ul>
        </div>
      </div>
      
      <div class="strategy-content">
        <h2>Transição Sem Burocracia</h2>
        <p class="evolution-p-subtitle">Nossa assessoria cuida de todo 
          o processo técnico enquanto você foca na operação.
        </p>
      </div>
        
      <div class="benefits-grid">

        <!-- CARD 1 -->
        <div class="benefit-card flip-card" onclick="this.classList.toggle('active')">
          <div class="flip-inner">

            <!-- FRENTE -->
            <div class="flip-front">
              <div class="benefit-number">01</div>
              <h4 class="benefit-title">Diagnóstico Fiscal</h4>
              <p class="benefit-text">
                Analisamos se o melhor para você é o Simples Nacional ou Lucro Presumido.
              </p>
              <span class="flip-hint">Clique para ver mais →</span>
            </div>

            <!-- VERSO -->
            <div class="flip-back">
              <div class="back-icon">📊</div>
              <h4 class="back-title">Decisão Estratégica</h4>
              <p class="back-text">
                Evite pagar impostos desnecessários com um diagnóstico profissional e personalizado.
              </p>
            </div>

          </div>
        </div>

        <!-- CARD 2 -->
        <div class="benefit-card flip-card" onclick="this.classList.toggle('active')">
          <div class="flip-inner">

            <div class="flip-front">
              <div class="benefit-number">02</div>
              <h4 class="benefit-title">Migração Técnica</h4>
              <p class="benefit-text">
                Alteração na Junta Comercial e Receita Federal sem interrupção das suas vendas.
              </p>
              <span class="flip-hint">Clique para ver mais →</span>
            </div>

            <div class="flip-back">
              <div class="back-icon">🛠️</div>
              <h4 class="back-title">Zero Dor de Cabeça</h4>
              <p class="back-text">
                Cuidamos de todo o processo técnico enquanto você continua faturando.
              </p>
            </div>

          </div>
        </div>

        <!-- CARD 3 -->
        <div class="benefit-card flip-card" onclick="this.classList.toggle('active')">
          <div class="flip-inner">

            <div class="flip-front">
              <div class="benefit-number">03</div>
              <h4 class="benefit-title">Gestão Mensal</h4>
              <p class="benefit-text">
                Suporte completo com folha de pagamento e monitoramento de impostos.
              </p>
              <span class="flip-hint">Clique para ver mais →</span>
            </div>

            <div class="flip-back">
              <div class="back-icon">📈</div>
              <h4 class="back-title">Crescimento Seguro</h4>
              <p class="back-text">
                Acompanhamento contínuo para evitar multas e melhorar resultados.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
    <div class="cta-box">
        <h3>Não espere ser desenquadrado de ofício pela Receita.</h3>
        <p>Migrar de forma planejada evita multas retroativas que podem quebrar o seu caixa. Vamos conversar sobre o seu momento atual?</p>
        <a href="https://wa.me/5511995172741" target="_blank" rel="noopener noreferrer" class="cta-button cta-button--spaced">
          Agendar Consultoria de Migração
        </a>
      </div>
    </div>
    `,

    "/diferencas": `
      <section class="info-section">
        <h1 class="info-title">Qual a melhor armadura jurídica para o seu negócio?</h1>
        <p class="section-subtitle info-p">
          O enquadramento correto é a base da sua segurança. Escolha o modelo que protege seu patrimônio e otimiza seus impostos.
        </p>

        <div class="info-grid">
          <div class="info-card">
            <span class="info-label">MEI</span>
            <h3>Início Rápido</h3>
            <p>Ideal para profissionais autônomos que estão começando e faturam até R$ 81 mil/ano.</p>
            <ul class="lista-check">
              <li>Registro simplificado de empresa.</li>
              <li>Imposto mensal fixo e reduzido.</li>
              <li>Cobertura previdenciária básica.</li>
              <li class="atencao">Responsabilidade ilimitada (bens pessoais em risco).</li>
              <li class="atencao">Limite rigoroso de faturamento e funcionários.</li>
            </ul>
          </div>

          <div class="info-card featured-card">
            <span class="info-label">LTDA / SLU</span>
            <h3>Proteção e Estratégia</h3>
            <p>O modelo ideal para PJs de alto ticket e empresas que buscam <strong>blindagem patrimonial</strong>.</p>
            <ul class="lista-check">
              <li><strong>Separação de bens:</strong> Seus bens pessoais protegidos.</li>
              <li><strong>SLU:</strong> Tenha uma LTDA sem precisar de sócios.</li>
              <li><strong>Escalabilidade:</strong> Sem limites de faturamento do MEI.</li>
              <li>Maior facilidade para empréstimos e licitações.</li>
              <li>Permite o enquadramento no Lucro Presumido.</li>
            </ul>
          </div>
        </div>
       
        <div class="strategy-content">
          <h2 class="spaced-text">Regime Simples Nacional</h2>
          <p class="spaced-text">
            Criado para simplificar, o Simples unifica 8 impostos em uma única guia. Mas atenção: nossa consultoria monitora mensalmente se ele ainda é o mais vantajoso para você.
          </p>

          <div class="flex-detail">
            <div class="detail-box">
              <h3>Vantagens Reais</h3>
              <ul class="lista-check">
                <li><strong>Economia Legal:</strong> Aplicamos o Fator R para reduzir impostos.</li>
                <li><strong>Credibilidade:</strong> Empresas estruturadas fecham melhores contratos.</li>
                <li><strong>Distribuição de Lucros:</strong> Ganho isento de IR.</li>
              </ul>
            </div>

            <div class="detail-box">
              <h3>Nossa Entrega</h3>
              <ul class="lista-check">
                <li><strong>Planejamento:</strong> Estudo tributário estratégico.</li>
                <li><strong>Gestão Digital:</strong> Documentos e CNDs sempre à mão.</li>
                <li><strong>Conformidade:</strong> Monitoramento total contra multas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div class="cta-box">
        <h3>Precisa de uma análise personalizada?</h3>
        <p>A legislação muda rápido. Fale com nosso time para garantir sua economia hoje.</p>
        <a 
          href="https://wa.me/5511995172741" 
          target="_blank" rel="noopener noreferrer" 
          class="cta-button cta-button--spaced">
          Falar com um Especialista Agora
        </a>
      </div>
    `,

    "/impostos": `
    <section class="tax-section">
        <h1 class="tax-title">Inteligência Fiscal</h1>
        <p class="tax-p">
          Pague o mínimo legal com estratégia. Com o nosso suporte, profissionais de tecnologia e saúde podem reduzir a carga tributária em até 60% através do Fator R.
        </p>

        <div class="tax-grid">
          <div class="tax-card">
            <div class="card-header">
              <span class="label-status">Sem Planejamento</span>
              <h3>Anexo V</h3>
            </div>
            <div class="card-body">
              <p>Alíquota padrão para serviços intelectuais (TI, Médicos, Engenheiros).</p>
              <div class="simple-table">
                <div class="t-row t-header">
                  <span>Faturamento</span>
                  <span>Imposto</span>
                </div>
                <div class="t-row">
                  <span>Até R$ 15 mil/mês</span>
                  <span class="value-red">15,5%</span>
                </div>
                <div class="t-row">
                  <span>Até R$ 30 mil/mês</span>
                  <span class="value-red">18,0%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="tax-card featured">
            <div class="card-header">
              <span class="label-status success">Estratégia Fator R</span>
              <h3>Anexo III</h3>
            </div>
            <div class="card-body">
              <p>Redução aplicada por nossa consultoria através da gestão de folha e pró-labore.</p>
              <div class="simple-table">
                <div class="t-row t-header">
                  <span>Faturamento</span>
                  <span>Imposto</span>
                </div>
                <div class="t-row">
                  <span>Até R$ 15 mil/mês</span>
                  <span class="value-green">6,0%</span>
                </div>
                <div class="t-row">
                  <span>Até R$ 30 mil/mês</span>
                  <span class="value-green">11,2%</span>
                </div>
              </div>
            </div>
            <div class="card-footer-info">
              Economia real de até 60%
            </div>
          </div>
        </div>
        <p style="text-align:center; padding:20px;margin:4rem auto">
          Para um faturamento de R$ 15 mil/mês,
          você deixa de pagar R$ 1.425 extras todo mês. 
          São mais de R$ 17 mil de economia por ano.
        </p>
      </div>
    </section>   
    <div class="cta-box">
      <h3>Sua atividade não é serviço?</h3>
      <p>Atendemos Comércio e Indústria com foco em lucro real e presumido.</p>
      <a 
        href="https://wa.me/5511995172741"
        target="_blank" 
        rel="noopener noreferrer" 
        class="cta-button cta-button--spaced">
          Solicitar Estudo Gratuito
        </a>
    </div>

    `,

    "/contato": `
    <section class="contact">
      <h1>Entre em Contato</h1>
      <p class="section-subtitle">
        Nossa equipe está pronta para atender você. Entre em contato através dos canais abaixo
      </p>

      <div class="contact-grid">
        <!-- Email -->
        <a 
          href="mailto:atendimento@alonsocontabil.com.br" 
          class="contact-card" 
          rel="noopener noreferrer"
        >
          <div class="contact-icon">✉</div>
          <div class="contact-label">Email</div>
          <div class="contact-value">atendimento@alonsocontabil.com.br</div>
        </a>
        
        <!-- WhatsApp -->
        <a 
          href="https://wa.me/5511995172741"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <div class="contact-icon">☎</div>
          <div class="contact-label">WhatsApp</div>
          <div class="contact-value">(11) 99517-2741</div>
        </a>

        <!-- Insta -->
        <a 
          href="https://www.instagram.com/alonsocontabil" 
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <div class="contact-label">Insta</div>
          <div class="contact-value">
            @alonsocontabil
          </div>
        </a>
      </div>
    </section>
  `
};