package com.capitalhumano.modelo;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data 
@Entity 
@Table(name = "competencia")
public class Competencia {

    @Id 
    private String codigo;

    @Column 
    private String nombre;

    @Column 
    private String descripcion;
    
    @Column 
    private boolean activo;

    // Relaciones
    @OneToMany(mappedBy = "competencia", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Factor> factores = new ArrayList<>();
}
