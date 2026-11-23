package com.capitalhumano.dao;

import java.util.ArrayList;
import java.util.UUID;

import com.capitalhumano.modelo.Cuestionario;
import com.capitalhumano.modelo.Candidato.TipoDocumento;

public interface ICuestionarioDao {

    public void guardar(Cuestionario cuestionario);

    public void actualizar(Cuestionario cuestionario);

    public Cuestionario findById(UUID id);

    public Cuestionario buscarActivoPorCandidato(UUID idCandidato);

    public Cuestionario buscarPorClaveYDoc(TipoDocumento tipoDocumento, String nro, String clave);

    public ArrayList<Cuestionario> listarVencidos();

    public ArrayList<Cuestionario> listarPorPuestoYEvaluacion(UUID idPuesto, UUID idEvaluacion);

}
