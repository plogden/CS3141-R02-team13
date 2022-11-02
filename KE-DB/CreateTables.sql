CREATE TABLE Locations(
    id int PRIMARY KEY,
    name varchar(50) NOT NULL,
    x_loc POINT NOT NULL,
    y_loc POINT NOT NULL,
    vehicle_required ENUM('Any', 'Light Off-Road', 'Moderate Off-Road', 'Heavy Off-Road') NOT NULL
);

CREATE TABLE Location_Types(
    id int PRIMARY KEY,
    location_id int NOT NULL,
    name varchar(20) NOT NULL,
    CONSTRAINT FK_LocType FOREIGN KEY (location_id) references Locations(id)
                           ON UPDATE CASCADE
                           ON DELETE CASCADE
);

CREATE TABLE Activities(
    id int PRIMARY KEY,
    location_id int NOT NULL,
    name varchar(20) NOT NULL,
    CONSTRAINT FK_LocActivity FOREIGN KEY (location_id) references Locations(id)
                       ON UPDATE CASCADE
                       ON DELETE CASCADE
)