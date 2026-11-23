package com.capitalhumano.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data 
@Entity 
@Table (name = "puesto")
public class Puesto {

    @Id 
    private String codigo;

    @Column 
    private String nombre;

    @Column 
    private String descripcion;

    @Column 
    private String empresa;

    @Column 
    private boolean activo;
}
