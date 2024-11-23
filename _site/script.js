fetch('data.yaml')
    .then(response => response.text())
    .then(yamlText => {
        const data = jsyaml.load(yamlText);

        // Update HTML with data from YAML
        document.getElementById('name').innerText = data.profile.name;
        document.getElementById('profession').innerText = data.profile.profession;
        document.getElementById('location').innerText = "Location: " + data.profile.location;
        
        const skillsList = document.getElementById('skills');
        data.profile.skills.forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill;
            skillsList.appendChild(li);
        });

        document.getElementById('email').innerText = "Email: " + data.profile.contact.email;
        document.getElementById('phone').innerText = "Phone: " + data.profile.contact.phone;
    })
    .catch(e => console.error("Error loading YAML file", e));
