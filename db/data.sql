INSERT INTO `professions` (`id`, `name`)
VALUES (DEFAULT, 'Abogado corporativo'),
	   (DEFAULT, 'Analista de datos'),
       (DEFAULT, 'Analista financiero'),
       (DEFAULT, 'Asistente social'),
       (DEFAULT, 'Contador'),
       (DEFAULT, 'Consultor empresarial'),
       (DEFAULT, 'Desarrollador de software'),
       (DEFAULT, 'Desarrollador web'),
       (DEFAULT, 'Especialista en recursos humanos (RRHH)'),
       (DEFAULT, 'Gerente de producto'),
       (DEFAULT, 'Ingeniero civil'),
       (DEFAULT, 'Jefe de ventas'),
       (DEFAULT, 'Psicólogo'),
       (DEFAULT, 'Periodista');
	
INSERT INTO `applicants` (`id`,`DNI`, `firstName`, `lastName`, `email`, `phone`, `linkedinURL`, `dateOfBirth`, `genre`,`professionId`, `experiencieLevel`)
VALUES (DEFAULT, 42123987, 'Ismael Ignacio Miguel', 'Torres', 'ignacio25.it@gmail.com', '3884267980', 'https://www.linkedin.com/in/ignacio-torres-150790249/', '2000-12-10', 'Hombre', 8, 'Semi-senior'),
	   (DEFAULT, 44125670, 'Alvaro Maximiliano', 'Ramos', 'alvaroramos048@gmail.com', '3886824090', 'https://www.linkedin.com/in/alvaro-ramos-3478a323a/', '2002-03-15', 'Hombre', 7, 'Junior'),
       (DEFAULT, 43654246, 'Facundo Joaquin', 'Farfan', 'faculata@gmail.com', 3885612345, 'https://www.linkedin.com/in/facundo-farf%C3%A1n-7127ba284/', '2001-07-11', 'Hombre', 2, 'Junior'),
	   (DEFAULT, 48765432, 'María', 'González', 'maria@gmail.com', 3885612347, 'https://www.linkedin.com/in/maria-gonzalez/', '1985-12-15', 'Mujer', 1, 'Senior'),
       (DEFAULT, 36789123, 'Pedro', 'Lopez', 'pedro@gmail.com', 3885612348, 'https://www.linkedin.com/in/pedro-lopez/', '1978-08-25', 'Hombre', 12, 'Senior'),
       (DEFAULT, 13579246, 'Ana', 'Martinez', 'ana@gmail.com', 3885612349, 'https://www.linkedin.com/in/ana-martinez/', '1995-03-10', 'Mujer', 5, 'Junior'),
       (DEFAULT, 24681357, 'Lucas', 'Sánchez', 'lucas@gmail.com', 3885612350, 'https://www.linkedin.com/in/lucas-sanchez/', '1980-09-05', 'Hombre', 14, 'Semi-senior');