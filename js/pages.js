const pages = {
  "/": `
    <section class="home">
      <h1>Contabilidade Estratégica para seu Negócio</h1>
      <p class="section-subtitle">
        Mais de 10 anos oferecendo soluções contábeis completas para empresas de todos os portes. 
        Atendimento personalizado, processos ágeis e assessoria estratégica para o crescimento sustentável do seu negócio.
      </p>

      <h2>Transição de CLT para Pessoa Jurídica</h2>
      <p>
        Planeje sua mudança profissional com segurança. Oferecemos consultoria completa para profissionais 
        que desejam migrar do regime CLT para PJ, garantindo conformidade fiscal e otimização tributária.
      </p>
      
      <ul>
        <li>Análise personalizada do melhor tipo societário para seu perfil</li>
        <li>Planejamento tributário para redução legal de impostos</li>
        <li>Orientação sobre pró-labore, INSS e benefícios fiscais</li>
        <li>Suporte completo na abertura e regularização do CNPJ</li>
        <li>Assessoria contínua para gestão financeira e fiscal</li>
      </ul>

      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-number">1</div>
          <div class="benefit-title">Atendimento Ágil</div>
          <p class="benefit-text">Respostas rápidas e suporte dedicado quando você mais precisa</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-number">2</div>
          <div class="benefit-title">Transparência</div>
          <p class="benefit-text">Comunicação clara e orientações objetivas em todas as etapas</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-number">3</div>
          <div class="benefit-title">Soluções Personalizadas</div>
          <p class="benefit-text">Estratégias sob medida para as necessidades do seu negócio</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-number">4</div>
          <div class="benefit-title">Conformidade</div>
          <p class="benefit-text">Garantia de regularidade fiscal e tributária</p>
        </div>
      </div>

      <div class="cta-box">
        <h3>Parceria Estratégica</h3>
        <p>Mais do que serviços contábeis, oferecemos consultoria estratégica para o crescimento sustentável do seu negócio</p>
      </div>
    </section>
  `,

  "/servicos": `
    <section class="servicos">
      <h1>Serviços Especializados</h1>
      <p class="section-subtitle">
        Soluções completas em contabilidade, consultoria fiscal e planejamento tributário para empresas e profissionais autônomos
      </p>

      <div class="service-card">
        <h3>Serviços Empresariais</h3>
        <span class="service-badge">MEI • ME • EPP</span>
        <ul>
          <li>Abertura, alteração e encerramento de empresas</li>
          <li>Escrituração contábil e fiscal completa</li>
          <li>Apuração de impostos e obrigações acessórias</li>
          <li>Folha de pagamento e departamento pessoal</li>
          <li>Gestão trabalhista e encargos sociais</li>
          <li>Planejamento tributário e elisão fiscal</li>
          <li>Consultoria para redução legal de impostos</li>
        </ul>
      </div>

      <div class="service-card">
        <h3>Serviços para Profissionais Autônomos</h3>
        <span class="service-badge">PJ • Prestadores de Serviço • Ex-CLT</span>
        <ul>
          <li>Abertura de CNPJ com orientação personalizada</li>
          <li>Enquadramento no regime tributário mais vantajoso</li>
          <li>Emissão de notas fiscais e gestão de impostos</li>
          <li>Assessoria para pró-labore e contribuição ao INSS</li>
          <li>Planejamento tributário personalizado</li>
          <li>Suporte contínuo para questões fiscais e contábeis</li>
          <li>Consultoria para crescimento e formalização</li>
        </ul>
      </div>

      <div class="cta-box">
        <h3>Solicite uma Proposta</h3>
        <p>Entre em contato para receber um orçamento personalizado e descobrir como podemos otimizar a gestão fiscal do seu negócio</p>
      </div>
    </section>
  `,

  "/Diferencas": `
    <section class="Diferencas">
      <h1>Entenda os Regimes Empresariais</h1>
      <p class="section-subtitle">
        Conheça as características e diferenças entre MEI, ME e o regime Simples Nacional para escolher a melhor opção para seu negócio
      </p>

      <div class="info-grid">
        <div class="info-card">
          <span class="info-label">MEI</span>
          <h3>Microempreendedor Individual</h3>
          <ul>
            <li>Faturamento limitado a R$ 81 mil/ano</li>
            <li>Pessoa física registrada como empresa</li>
            <li>Regime tributário simplificado</li>
            <li>Não permite sociedade</li>
            <li>Limite de 1 funcionário contratado</li>
            <li>Impostos fixos mensais reduzidos</li>
          </ul>
        </div>

        <div class="info-card">
          <span class="info-label">ME</span>
          <h3>Microempresa</h3>
          <ul>
            <li>Faturamento até R$ 360 mil/ano</li>
            <li>Permite sociedade entre pessoas</li>
            <li>Contratação ilimitada de funcionários</li>
            <li>Maior flexibilidade operacional</li>
            <li>Obrigações fiscais mais complexas</li>
            <li>Requer serviços de contabilidade</li>
          </ul>
        </div>
      </div>

      <h2>Regime Simples Nacional</h2>
      <p>
        Sistema tributário unificado que consolida oito impostos federais, estaduais e municipais em uma única guia de pagamento, 
        criado especificamente para simplificar a vida de micro e pequenas empresas brasileiras.
      </p>

      <h3>Critérios de Elegibilidade</h3>
      <div class="detail-section">
        <ul>
          <li><strong>Natureza jurídica:</strong> Microempresa (ME) ou Empresa de Pequeno Porte (EPP)</li>
          <li><strong>Faturamento ME:</strong> Receita bruta anual de até R$ 360 mil</li>
          <li><strong>Faturamento EPP:</strong> Receita bruta anual entre R$ 360 mil e R$ 4,8 milhões</li>
          <li><strong>Atividades permitidas:</strong> Deve constar nos anexos da Lei Complementar 123/2006</li>
          <li><strong>Regularidade fiscal:</strong> Empresa sem débitos com União, Estados e Municípios</li>
          <li><strong>Participação societária:</strong> Soma dos faturamentos deve respeitar os limites do regime</li>
        </ul>
      </div>

      <h3>Principais Obrigações</h3>
      <div class="detail-section">
        <ul>
          <li><strong>DAS:</strong> Pagamento mensal através do Documento de Arrecadação do Simples Nacional</li>
          <li><strong>Tributação variável:</strong> Alíquotas conforme anexo e faixa de faturamento</li>
          <li><strong>DEFIS:</strong> Declaração anual obrigatória de informações socioeconômicas e fiscais</li>
          <li><strong>Escrituração:</strong> Controle rigoroso de receitas, despesas e movimentações</li>
          <li><strong>Gestão de limites:</strong> Acompanhamento mensal para não ultrapassar teto de faturamento</li>
        </ul>
      </div>

      <h3>Processo de Adesão</h3>
      <p>
        A opção pelo Simples Nacional não ocorre automaticamente. O processo exige solicitação formal através do 
        portal da Receita Federal, geralmente realizada em janeiro ou no momento da abertura da empresa.
      </p>

      <h3>Importância da Conformidade Fiscal</h3>
      <div class="detail-section">
        <ul>
          <li><strong>Regularidade legal:</strong> Previne autuações fiscais e penalidades</li>
          <li><strong>Credibilidade comercial:</strong> Fortalece relações com fornecedores e clientes</li>
          <li><strong>Acesso a crédito:</strong> Facilita aprovação em linhas de financiamento</li>
          <li><strong>Participação em licitações:</strong> Habilita empresa para contratos públicos</li>
          <li><strong>Crescimento sustentável:</strong> Base sólida para expansão dos negócios</li>
        </ul>
      </div>

      <div class="cta-box">
        <h3>Consultoria Especializada</h3>
        <p>A legislação tributária está em constante atualização. Conte com nossa equipe para garantir a conformidade e otimização fiscal do seu negócio</p>
      </div>
    </section>
  `,

  "/Evolucao": `
    <section class="Evolucao">
      <h1>Crescimento Empresarial</h1>
      <p class="section-subtitle">
        Planeje a evolução do seu negócio com segurança. Orientamos a transição do MEI para regimes mais amplos, 
        garantindo conformidade e aproveitamento de novas oportunidades
      </p>

      <h2>Quando Considerar a Migração</h2>
      <div class="detail-section">
        <h3>Indicadores para Mudança de Regime</h3>
        <ul>
          <li>Faturamento anual ultrapassando ou próximo de R$ 81 mil</li>
          <li>Necessidade de inclusão de sócios na empresa</li>
          <li>Expansão para atividades não permitidas no MEI</li>
          <li>Aumento no volume de emissão de notas fiscais</li>
          <li>Demanda por contratação de múltiplos funcionários</li>
          <li>Crescimento da estrutura operacional</li>
          <li>Oportunidades de novos contratos empresariais</li>
        </ul>
      </div>

      <h2>Vantagens da Evolução</h2>
      <div class="detail-section">
        <h3>Benefícios Estratégicos</h3>
        <ul>
          <li><strong>Crescimento estruturado:</strong> Possibilidade de expandir operações com planejamento</li>
          <li><strong>Maior credibilidade:</strong> Fortalecimento da imagem perante mercado e fornecedores</li>
          <li><strong>Acesso a crédito:</strong> Linhas de financiamento empresarial mais robustas</li>
          <li><strong>Flexibilidade operacional:</strong> Liberdade para contratar e formar sociedades</li>
          <li><strong>Continuidade legal:</strong> Manutenção das atividades sem riscos fiscais</li>
          <li><strong>Competitividade:</strong> Participação em licitações e grandes contratos</li>
        </ul>
      </div>

      <h2>Nossa Assessoria na Transição</h2>
      <div class="detail-section">
        <h3>Serviços de Consultoria</h3>
        <ul>
          <li><strong>Diagnóstico completo:</strong> Análise detalhada da situação atual e projeções</li>
          <li><strong>Planejamento temporal:</strong> Definição do melhor momento para a migração</li>
          <li><strong>Enquadramento adequado:</strong> Escolha do regime tributário mais vantajoso</li>
          <li><strong>Regularização documental:</strong> Preparação de toda documentação necessária</li>
          <li><strong>Suporte fiscal:</strong> Acompanhamento nas obrigações tributárias e contábeis</li>
          <li><strong>Orientação estratégica:</strong> Consultoria para crescimento sustentável</li>
        </ul>
      </div>

      <div class="cta-box">
        <h3>Planejamento Profissional</h3>
        <p>Entre em contato para agendar uma consultoria e descobrir o momento ideal para expandir seu negócio com segurança jurídica e fiscal</p>
      </div>
    </section>
  `,

   "/Impostos": `
    <section class="impostos">
      <h1>Quanto Vou Pagar de Imposto?</h1>
      <p class="section-subtitle">
        Entenda como funciona a tributação no Simples Nacional e descubra quanto sua empresa pagará de acordo com seu faturamento e atividade
      </p>

      <p>
        No Simples Nacional, o valor do imposto depende de dois fatores principais: o faturamento anual acumulado 
        e a atividade exercida pela empresa. As atividades são classificadas em anexos da Lei Complementar nº 123/2006, 
        cada um com tabelas de alíquotas progressivas.
      </p>

      <div class="cta-box" style="margin: 2rem 0;">
        <h3>Sistema Progressivo</h3>
        <p>Quanto maior o faturamento da empresa, maior será a alíquota aplicada, mas sempre dentro de um regime tributário simplificado e unificado</p>
      </div>

      <h2>Anexo I - Comércio</h2>
      <p>Aplicável a empresas que atuam no setor de comércio de mercadorias.</p>
      
      <div class="tax-table">
        <div class="tax-row tax-header">
          <div>Receita Bruta em 12 Meses</div>
          <div>Alíquota</div>
          <div>Valor a Deduzir</div>
        </div>
        <div class="tax-row">
          <div>Até R$ 180.000,00</div>
          <div>4,00%</div>
          <div>—</div>
        </div>
        <div class="tax-row">
          <div>R$ 180.000,01 a R$ 360.000,00</div>
          <div>7,30%</div>
          <div>R$ 5.940,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 360.000,01 a R$ 720.000,00</div>
          <div>9,50%</div>
          <div>R$ 13.860,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 720.000,01 a R$ 1.800.000,00</div>
          <div>10,70%</div>
          <div>R$ 22.500,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 1.800.000,01 a R$ 3.600.000,00</div>
          <div>14,30%</div>
          <div>R$ 87.300,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 3.600.000,01 a R$ 4.800.000,00</div>
          <div>19,00%</div>
          <div>R$ 378.000,00</div>
        </div>
      </div>

      <h2>Anexo II - Indústria</h2>
      <p>Destinado a empresas do setor industrial e de fabricação.</p>
      
      <div class="tax-table">
        <div class="tax-row tax-header">
          <div>Receita Bruta em 12 Meses</div>
          <div>Alíquota</div>
          <div>Valor a Deduzir</div>
        </div>
        <div class="tax-row">
          <div>Até R$ 180.000,00</div>
          <div>4,50%</div>
          <div>—</div>
        </div>
        <div class="tax-row">
          <div>R$ 180.000,01 a R$ 360.000,00</div>
          <div>7,80%</div>
          <div>R$ 5.940,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 360.000,01 a R$ 720.000,00</div>
          <div>10,00%</div>
          <div>R$ 13.860,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 720.000,01 a R$ 1.800.000,00</div>
          <div>11,20%</div>
          <div>R$ 22.500,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 1.800.000,01 a R$ 3.600.000,00</div>
          <div>14,70%</div>
          <div>R$ 85.500,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 3.600.000,01 a R$ 4.800.000,00</div>
          <div>30,00%</div>
          <div>R$ 720.000,00</div>
        </div>
      </div>

      <h2>Anexo III - Prestação de Serviços</h2>
      <p>
        Empresas de prestação de serviços que não se enquadram nos Anexos IV ou V. Incluem instalação, 
        manutenção, reparos, agências de viagens, escritórios de contabilidade, escolas de idiomas, entre outras.
      </p>
      
      <div class="tax-table">
        <div class="tax-row tax-header">
          <div>Receita Bruta em 12 Meses</div>
          <div>Alíquota</div>
          <div>Valor a Deduzir</div>
        </div>
        <div class="tax-row">
          <div>Até R$ 180.000,00</div>
          <div>6,00%</div>
          <div>—</div>
        </div>
        <div class="tax-row">
          <div>R$ 180.000,01 a R$ 360.000,00</div>
          <div>11,20%</div>
          <div>R$ 9.360,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 360.000,01 a R$ 720.000,00</div>
          <div>13,50%</div>
          <div>R$ 17.640,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 720.000,01 a R$ 1.800.000,00</div>
          <div>16,00%</div>
          <div>R$ 35.640,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 1.800.000,01 a R$ 3.600.000,00</div>
          <div>21,00%</div>
          <div>R$ 125.640,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 3.600.000,01 a R$ 4.800.000,00</div>
          <div>33,00%</div>
          <div>R$ 648.000,00</div>
        </div>
      </div>

      <div class="info-box">
        <strong>Observação:</strong> Esses percentuais já incluem ICMS ou ISS, conforme aplicável à atividade.
      </div>

      <h2>Anexo IV - Serviços Específicos</h2>
      <p>Serviços advocatícios, construção civil, obras de engenharia, vigilância e limpeza.</p>
      
      <div class="tax-table">
        <div class="tax-row tax-header">
          <div>Receita Bruta em 12 Meses</div>
          <div>Alíquota</div>
          <div>Valor a Deduzir</div>
        </div>
        <div class="tax-row">
          <div>Até R$ 180.000,00</div>
          <div>4,50%</div>
          <div>—</div>
        </div>
        <div class="tax-row">
          <div>R$ 180.000,01 a R$ 360.000,00</div>
          <div>9,00%</div>
          <div>R$ 8.100,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 360.000,01 a R$ 720.000,00</div>
          <div>10,20%</div>
          <div>R$ 12.420,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 720.000,01 a R$ 1.800.000,00</div>
          <div>14,00%</div>
          <div>R$ 39.780,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 1.800.000,01 a R$ 3.600.000,00</div>
          <div>22,00%</div>
          <div>R$ 183.780,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 3.600.000,01 a R$ 4.800.000,00</div>
          <div>33,00%</div>
          <div>R$ 828.000,00</div>
        </div>
      </div>

      <h2>Anexo V - Serviços de Saúde e Bem-Estar</h2>
      <p>
        Serviços de saúde, bem-estar e outros serviços específicos. As alíquotas variam conforme a relação 
        entre folha de salários e receita bruta.
      </p>
      
      <div class="tax-table">
        <div class="tax-row tax-header">
          <div>Receita Bruta em 12 Meses</div>
          <div>Alíquota</div>
          <div>Valor a Deduzir</div>
        </div>
        <div class="tax-row">
          <div>Até R$ 180.000,00</div>
          <div>15,50%</div>
          <div>—</div>
        </div>
        <div class="tax-row">
          <div>R$ 180.000,01 a R$ 360.000,00</div>
          <div>18,00%</div>
          <div>R$ 4.500,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 360.000,01 a R$ 720.000,00</div>
          <div>19,50%</div>
          <div>R$ 9.900,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 720.000,01 a R$ 1.800.000,00</div>
          <div>20,50%</div>
          <div>R$ 17.100,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 1.800.000,01 a R$ 3.600.000,00</div>
          <div>23,00%</div>
          <div>R$ 62.100,00</div>
        </div>
        <div class="tax-row">
          <div>R$ 3.600.000,01 a R$ 4.800.000,00</div>
          <div>30,50%</div>
          <div>R$ 540.000,00</div>
        </div>
      </div>

      <div class="info-box">
        <strong>Regra especial:</strong> Para empresas em que a folha de salários represente 28,5% ou mais da receita bruta, 
        pode-se utilizar a tabela do Anexo III em vez do Anexo V, resultando em menor tributação.
      </div>

      <div class="cta-box">
        <h3>Dúvidas sobre o Enquadramento?</h3>
        <p>
          Nossa equipe de especialistas está pronta para analisar seu negócio e identificar o anexo correto, 
          garantindo que você pague apenas o necessário. Entre em contato para uma consultoria personalizada.
        </p>
      </div>
    </section>
  `,


  "/contato": `
  <section class="contato">
    <h1>Entre em Contato</h1>
    <p class="section-subtitle">
      Nossa equipe está pronta para atender você. Entre em contato através dos canais abaixo
    </p>

    <div class="contact-grid">
      
      <!-- Email -->
      <a 
        href="mailto:atendimento@alonsocontabil.com.br" 
        class="contact-card"
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

      <!-- Horário -->
      <div class="contact-card">
        <div class="contact-icon">⏰</div>
        <div class="contact-label">Horário</div>
        <div class="contact-value">
          Segunda a Sexta<br>9h às 18h
        </div>
      </div>

    </div>
  </section>
`

};