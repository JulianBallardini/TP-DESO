package com.capitalhumano.modelo;

import java.sql.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data 
@Entity 
@Table (name = "evaluacion")
public class Evaluacion {

    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private UUID id;

    @Column 
    private Date fechaCreacion;
}
