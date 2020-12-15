const TaskModel = require("../model/TaskModel");
const { isPast } = require("date-fns");

const TaskValidation = async (req, res, next) => {
  const { macaddress, type, title, description, when } = req.body;

  if (!macaddress)
    return res.status(400).json({ error: "macaddress e obrigatorio" });

  else if (!type) return res.status(400).json({ error: "Tipo e obrigatorio" });

  else if (!title)
    return res.status(400).json({ error: "Titulo e obrigatorio" });

  else if (!description)
    return res.status(400).json({ error: "Descricao e obrigatorio" });

  else if (!when) return res.status(400).json({ error: "Data e obrigatorio" });

  else if (isPast(new Date(when)))
    return res
      .status(400)
      .json({ error: "Data invalida,escolha data e hora futura" });
  else {
    let exists;

    if (req.params.id) {
      exists = await TaskModel.findOne({
        _id: { $ne: req.params.id },
        when: { $eq: new Date(when) },
        macaddress: { $in: macaddress },
      });
    } else {
      exists = await TaskModel.findOne({
        when: { $eq: new Date(when) },
        macaddress: { $in: macaddress },
      });

    }
    
    if (exists) {
        return res.status(400).json({ error: "Horario em conflito" });
      }
      next();
  }
};

module.exports = TaskValidation;
