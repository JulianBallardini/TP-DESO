package com.capitalhumano.modelo;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data 
@Entity 
@Table(name = "puesto")
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

    // Relaciones
    @OneToMany(mappedBy = "puesto", cascade = CascadeType.ALL, orphanRemoval = true)
    @Size(min = 1)
    private List<CaracteristicaPuesto> caracteristicas = new ArrayList<>();
}
