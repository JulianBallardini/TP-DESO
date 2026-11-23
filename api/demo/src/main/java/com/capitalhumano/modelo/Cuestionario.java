package com.capitalhumano.modelo;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data 
@Entity 
@Table (name = "cuestionario")
public class Cuestionario {

    public enum EstadoCuestionario {
        ACTIVO,
        EN_PROCESO,
        COMPLETO,
        INCOMPLETO,
        SIN_CONTESTAR
    }

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long idCuestionario;

    @Column 
    private String clave;
    
    @Enumerated (EnumType.STRING)
    @Column 
    private EstadoCuestionario estado;

    @Column 
    private Date fechaHoraInicio;

    @Column 
    private Date fechaHoraFin;

    @Column 
    private int cantidadAccesos;

    @Column 
    private int maximoAccesos;

    @Column 
    private int tiempoMaximo;

}
