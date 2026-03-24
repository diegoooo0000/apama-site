const defaultPatrocinadores = /*APAMA_defaultPatrocinadores_START*/[
  {
    "id": "p1",
    "nome": "Nome do Patrocinador",
    "logo": "",
    "site": "",
    "tier": "ouro",
    "ano": 2025
  }
]/*APAMA_defaultPatrocinadores_END*/;

let patrocinadores = JSON.parse(JSON.stringify(defaultPatrocinadores));
src = replaceJsVar(src, 'defaultPatrocinadores', patrocinadores);
/* --- SISTEMA DE PATROCINADORES --- */

function renderPatrocinadores() {
  const container = document.getElementById('patrochadoresContent');
  if (!container) return;
  
  const currentYear = new Date().getFullYear();
  // Filtra patrocinadores do ano atual
  const ativos = patrocinadores.filter(p => p.ano == currentYear || !p.ano);
  
  const tiers = ['ouro', 'prata', 'bronze', 'apoio'];
  const labels = { 
    ouro: 'Patrocinadores Ouro', 
    prata: 'Patrocinadores Prata', 
    bronze: 'Patrocinadores Bronze', 
    apoio: 'Parceiros e Apoio' 
  };
  
  let html = '';
  tiers.forEach(tier => {
    const filtrados = ativos.filter(p => p.tier === tier);
    if (filtrados.length > 0) {
      html += `
        <div class="patrocinio-tier">
          <div class="patrocinio-tier-label ${tier}">${labels[tier]}</div>
          <div class="patrocinio-grid">
            ${filtrados.map(p => `
              <a href="${p.site || '#'}" target="_blank" class="patrocinio-card" title="${p.nome}">
                ${p.logo ? `<img src="${p.logo}" alt="${p.nome}">` : `<span>${p.nome}</span>`}
              </a>
            `).join('')}
          </div>
        </div>
      `;
    }
  });
  
  container.innerHTML = html || '<div style="color:rgba(255,255,255,0.3); font-size:0.9rem;">Nenhum patrocinador cadastrado para ' + currentYear + '.</div>';
}

function renderAdminPatrocinadores() {
  const list = document.getElementById('patrList');
  if (!list) return;
  
  // Ordena por ano (decrescente) e depois por tier
  const sorted = [...patrocinadores].sort((a, b) => b.ano - a.ano);
  
  list.innerHTML = sorted.map((p) => `
    <div class="patr-item">
      <img src="${p.logo || 'https://via.placeholder.com/100x60?text=No+Logo'}" />
      <div class="patr-item-name">
        <strong>${p.nome}</strong><br>
        <small style="opacity:0.6;">${p.site || 'Sem link'} • Ano: ${p.ano}</small>
      </div>
      <div class="patr-item-tier ${p.tier}">${p.tier}</div>
      <button class="adm-btn-green" style="padding:5px 10px; font-size:11px; width:auto;" onclick="editPatrocinador('${p.id}')">✏️</button>
      <button class="adm-btn-red" style="padding:5px 10px; font-size:11px; width:auto;" onclick="removePatrocinador('${p.id}')">🗑️</button>
    </div>
  `).join('');
}

function addPatrocinador() {
  const nome = document.getElementById('patrNome').value.trim();
  const tier = document.getElementById('patrTier').value;
  const logo = document.getElementById('patrLogo').value.trim();
  const site = document.getElementById('patrSite').value.trim();
  const ano  = parseInt(document.getElementById('patrAno').value) || new Date().getFullYear();

  if (!nome) { alert('O nome da empresa é obrigatório.'); return; }

  // Se já existe um ID sendo editado (lógica simples de upsert)
  const id = 'p' + Date.now();
  patrocinadores.push({ id, nome, tier, logo, site, ano });
  
  // Limpar campos
  document.getElementById('patrNome').value = '';
  document.getElementById('patrLogo').value = '';
  document.getElementById('patrSite').value = '';
  
  renderAdminPatrocinadores();
  renderPatrocinadores();
  if(typeof showToast === 'function') showToast('✅ Patrocinador atualizado!');
}

function removePatrocinador(id) {
  if (!confirm('Deseja remover este patrocinador?')) return;
  patrocinadores = patrocinadores.filter(p => p.id !== id);
  renderAdminPatrocinadores();
  renderPatrocinadores();
}

function editPatrocinador(id) {
  const p = patrocinadores.find(item => item.id === id);
  if (!p) return;
  
  document.getElementById('patrNome').value = p.nome;
  document.getElementById('patrTier').value = p.tier;
  document.getElementById('patrLogo').value = p.logo;
  document.getElementById('patrSite').value = p.site;
  document.getElementById('patrAno').value = p.ano;
  
  // Remove o antigo para que o "Adicionar" funcione como um Update
  patrocinadores = patrocinadores.filter(item => item.id !== id);
  renderAdminPatrocinadores();
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Sobe para o formulário
}
if (tab === 'patrocinadores') renderAdminPatrocinadores();
renderPatrocinadores();
