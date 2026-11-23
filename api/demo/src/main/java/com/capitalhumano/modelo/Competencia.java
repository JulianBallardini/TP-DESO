package com.capitalhumano.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data 
@Entity 
@Table (name ="competencia")
public class Competencia {

    @Id 
    private String codigo;

    @Column 
    private String nombre;

    @Column 
    private String descripcion;
    
    @Column 
    private boolean activo;
}
