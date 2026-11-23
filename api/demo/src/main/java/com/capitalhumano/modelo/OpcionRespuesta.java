package com.capitalhumano.modelo;

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
@Table (name = "opcion_respuesta")
public class OpcionRespuesta {

    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private UUID id;

    @Column 
    private String nombre;

    @Column 
    private String descripcion;

    @Column 
    private  boolean activo;

}
