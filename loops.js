let contacts = [
  {
    name: "Lucas Andrade",
    phone: "(11) 98888-1111",
    email: "lucas.andrade@email.com"
  },
  {
    name: "Fernanda Souza",
    phone: "(11) 97777-2222",
    email: "fernanda.souza@email.com"
  },
  {
    name: "Gabriel Oliveira",
    phone: "(11) 96666-3333",
    email: "gabriel.oliveira@email.com"
  }
];

// ===== FUNÇÃO DE RENDER =====
function render(contactList) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  for (const c of contactList) {
    output.innerHTML += `
      <div class="contact">
        <strong>${c.name}</strong><br>
        📞 ${c.phone}<br>
        ✉️ ${c.email}
      </div>
    `;
  }
}

// ===== AÇÕES =====
function showFirst() {
  if (contacts.length === 0) return;
  render([contacts[0]]);
}

function showLast() {
  if (contacts.length === 0) return;
  render([contacts[contacts.length - 1]]);
}

function showAll() {
  render(contacts);
}

function addContact() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if (!name || !phone || !email) {
    alert("Preencha todos os campos!");
    return;
  }

  contacts.push({ name, phone, email });

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";

  showAll();
}

// ===== MOSTRAR AO CARREGAR =====
showAll();