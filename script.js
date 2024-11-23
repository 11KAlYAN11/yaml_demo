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
        document.getElementById('awsCer').innerText = "Certificates: AWS " + data.profile.certifications.aws;
        document.getElementById('salesforceCer').innerText = "Saleforce: " + data.profile.certifications.salesforce;
        document.getElementById('awsPro').innerText = "Projects: AWS " + data.profile.projects.aws;
        document.getElementById('salesforcePro').innerText = "Salesforce " + data.profile.projects.salesforce;
        document.getElementById('javaPro').innerText = "Java " + data.profile.projects.java;

    })
    .catch(e => console.error("Error loading YAML file", e));
