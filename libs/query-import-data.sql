DO $$
    DECLARE LATAM_URL VARCHAR(999) := 'https://www.targetdata.com.br/wp-content/uploads/2017/08/logo-cliente-targetdata-tam-1.png';
BEGIN

insert into users (id, name, email, phone, password_hash, birth_date, created_at, updated_at) values (200, 'José Vinícius', 'josephdsbr@gmail.com', '081997667754', '123456', '1997-10-14 00:00:00', current_date, current_date );
insert into users (id, name, email, phone, password_hash, birth_date, created_at, updated_at) values (201, 'Rodrigo Nunes', 'rodrigonunes@gmail.com', '081997667754', '123456', '1997-10-14 00:00:00', current_date, current_date );
insert into users (id, name, email, phone, password_hash, birth_date, created_at, updated_at) values (202, 'Ana Vieira', 'anavieira@gmail.com', '081997667754', '123456', '1997-10-14 00:00:00', current_date, current_date );
insert into users (id, name, email, phone, password_hash, birth_date, created_at, updated_at) values (203, 'João Paulo', 'joaopaulo@gmail.com', '081997667754', '123456', '1997-10-14 00:00:00', current_date, current_date );

insert into states (id, description, created_at, updated_at) values (100, 'Agendado', current_date, current_date);
insert into states (id, description, created_at, updated_at) values (101, 'Atrasado', current_date, current_date);
insert into states (id, description, created_at, updated_at) values (102, 'Cancelado', current_date, current_date);

insert into flights (id, company, company_url, code, origin, port, destiny, departure_date, arrival_date, state_id, created_at, updated_at)
values (301, 'LATAM', LATAM_URL, 'TAM3300', 'São Paulo (GRU)', 'A1', 'Florianópolis (FLN)', '2019-12-16 00:00:00', '2019-12-16 00:30:00', 100, current_date, current_date);

insert into flights (id, company, company_url, code, origin, port, destiny, departure_date, arrival_date, state_id, created_at, updated_at)
values (302, 'LATAM', LATAM_URL, 'TAM3301', 'São Paulo (GRU)', 'A2', 'Recife (RCF)', '2019-12-16 04:00:00', '2019-12-16 05:30:00', 100, current_date, current_date);

insert into flight_lists (id, flight_id, user_id, created_at, updated_at) values (401, 301, 200, current_date, current_date);
insert into flight_lists (id, flight_id, user_id, created_at, updated_at) values (402, 301, 201, current_date, current_date);
insert into flight_lists (id, flight_id, user_id, created_at, updated_at) values (403, 302, 202, current_date, current_date);
insert into flight_lists (id, flight_id, user_id, created_at, updated_at) values (404, 302, 203, current_date, current_date);
END $$;
